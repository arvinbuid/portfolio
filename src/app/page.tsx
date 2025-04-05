'use client'

import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [id, setId] = useState('0')
  const componentsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        const intersecting = entry.isIntersecting;
        if (intersecting) {
          setId(String(entry.target.id))
        }
      })
    }, {
      threshold: 0.3
    })
    // Convert componentsRef to an array
    const components = Array.from(componentsRef.current!.children);

    // Add observer to each children components
    components.forEach((component) => {
      observer.observe(component)
    })

    return () => {
      components.forEach((component) => {
        observer.unobserve(component)
      })

      observer.disconnect()
    }
  }, [])


  return (
    <>
      <Navbar id={id} />
      <div ref={componentsRef}>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </div>
    </>
  );
}
