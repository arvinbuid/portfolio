'use client'

import Contact from '../../components/Contact';
import Description from '../../components/Description';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Preloader from '../../components/preloader/Preloader';
import Projects from '../../components/Projects';
import SlidingImages from '../../components/SlidingImages';
import Modal from '../../components/modal';
import styles from './page.module.css'

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

interface ModalState {
  active: boolean;
  index: number;
}

const projects = [
  {
    title: "Dapper Fit",
    src: "dapper-fit.png",
    color: "#000000",
    link: "https://dapper-fit.vercel.app/"
  },
  {
    title: "Workhive",
    src: "workhive.png",
    color: "#8C8C8C",
    link: "#"
  },
  {
    title: "PrimeCare",
    src: "primecare.png",
    color: "#EFE8D3",
    link: "https://primecare-kappa.vercel.app/"
  },
  {
    title: "Propery Hub",
    src: "property-hub.png",
    color: "#706D63",
    link: "https://property-hub-dusky.vercel.app/"
  }
]

export default function Home() {
  const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [preloaderAnimationFinished, setPreloaderAnimationFinished] = useState(false);

  // Effect to check screen width
  useEffect(() => {
    const checkScreenWidth = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    checkScreenWidth(); // Set initial screen width
    window.addEventListener('resize', checkScreenWidth);
    return () => window.removeEventListener('resize', checkScreenWidth);
  }, [])

  // Effect to set loading state to false after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timer);
  }, [])

  // Effect to override cursor and scroll initial style from the globals.css
  useEffect(() => {
    if (!loading && preloaderAnimationFinished) {
      document.body.style.cursor = 'default';
      document.body.style.overflowY = 'scroll';
    }
  }, [loading, preloaderAnimationFinished])

  // Effect to set cursor to none when modal is active
  useEffect(() => {
    if (loading || modal.active) {
      document.body.style.cursor = modal.active ? 'none' : 'wait';
    } else {
      document.body.style.cursor = 'default';
    }
  }, [loading, modal]);

  // Effect to update modal to prevent activation on small screens
  const handleSetModal: Dispatch<SetStateAction<ModalState>> = (value) => {
    if (isLargeScreen) {
      setModal(value);
    }
  };

  return (
    <>
      <AnimatePresence mode='wait' onExitComplete={() => setPreloaderAnimationFinished(true)}>
        {
          loading && <Preloader />
        }
      </AnimatePresence>
      <Header />
      <Hero />
      <Description />
      {/* Project */}
      <main className={styles.main}>
        <div className={styles.body}>
          {
            projects.map((project, index) => (
              <Projects key={index} index={index} title={project.title} link={project.link} setModal={handleSetModal} />
            ))
          }
        </div>
        {isLargeScreen && <Modal modal={modal} projects={projects} />}
      </main>
      <SlidingImages />
      <Contact />
    </>
  )
}
