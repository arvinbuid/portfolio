'use client'

import { useCallback, useEffect, useRef, useState } from "react"
import Heading from "./sub/Heading"
import Project from "./sub/Project"

import { projectsButton, projectsData } from "@/assets"
import { animate, motion } from "framer-motion"

function Projects() {
    const [tech, setTech] = useState('All')
    const [index, setIndex] = useState(0);
    const prevIndexRef = useRef(0);

    // Create an array of refs for each button
    const buttonsRef = useRef<Array<HTMLButtonElement | null>>([]);

    const handleClick = useCallback(() => {
        const prevButton = buttonsRef.current[prevIndexRef.current];
        const currentButton = buttonsRef.current[index];

        if (prevButton) {
            animate(prevButton, { opacity: 0.5, scale: 1 });
        }

        if (currentButton) {
            animate(currentButton, { opacity: 1, scale: 1.2 });
        }
    }, [index, prevIndexRef]);

    useEffect(() => {
        handleClick();
        prevIndexRef.current = index // Update previous index
    }, [index, handleClick])

    return (
        <div id='projects' className="min-h-screen px-16 xl:px-96 py-20">
            <Heading text="Projects" />
            <div className="flex flex-wrap items-center justify-between gap-4 py-10">
                {/* Project Buttons */}
                {projectsButton.map((text, index) => (
                    <motion.button
                        key={index}
                        onClick={() => {
                            setTech(text)
                            setIndex(index)
                        }}
                        initial={{
                            opacity: index === 0 ? 1 : 0.5,
                            scale: index === 0 ? 1.2 : 1
                        }}
                        ref={(el) => { buttonsRef.current[index] = el }}
                        className="border border-yellow-500 px-2 py-1 rounded-xl text-sm font-light tracking-wider text-gray-700 cursor-pointer">
                        {text}
                    </motion.button>
                ))}

            </div>
            <div className="flex flex-wrap justify-center items-center gap-4">
                {/* Projects Data */}
                {projectsData
                    .filter((project) => {
                        return project.tech.some((item) => (tech === 'All' ? true : item === tech)) // include all projects if tech is 'All'
                    })
                    .map((data, index) => (
                        <motion.div key={`id-${index}`} layout>
                            <Project data={data} index={index} />
                        </motion.div>
                    ))}
            </div>
        </div>
    )
}

export default Projects
