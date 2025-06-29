'use client'

import Description from '../../components/Description';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Projects from '../../components/Projects';
import Modal from '../../components/modal';
import styles from './page.module.css'

import { useState } from 'react';

const projects = [
  {
    title: "Dapper Fit",
    src: "dapper-fit.png",
    color: "#000000"
  },
  {
    title: "Workhive",
    src: "workhive.png",
    color: "#8C8C8C"
  },
  {
    title: "PrimeCare",
    src: "primecare.png",
    color: "#EFE8D3"
  },
  {
    title: "Propery Hub",
    src: "property-hub.png",
    color: "#706D63"
  }
]

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      <Header />
      <Hero />
      <Description />

      {/* Project */}
      <main className={styles.main}>
        <div className={styles.body}>
          {
            projects.map((project, index) => (
              <Projects key={index} index={index} title={project.title} setModal={setModal} />
            ))
          }
        </div>
        <Modal modal={modal} projects={projects} />
      </main>
    </>
  )
}
