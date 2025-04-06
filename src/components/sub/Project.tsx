'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import { projectIcons } from "@/assets"

interface ProjectProps {
    data: {
        name: string,
        desc: string,
        url: string,
        tech: Array<string>
        githubLink: string,
        livePreview: string
    },
    index: number
}

function Project({ data, index }: ProjectProps) {
    const [show, setShow] = useState(false)
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{}}
                className="relative w-full lg:w-[400px] h-max border border-yellow-400 rounded-lg cursor-pointer">
                <Image src={data.url} alt="Synapse" width={500} height={500} className="rounded-lg opacity-90" />
                <motion.div onClick={() => setShow(!show)}
                    initial={{ opacity: 0 }} animate={{ opacity: show ? 1 : 0 }} transition={{ duration: 0.3 }}
                    className="absolute top-0 bg-white/95 dark:bg-zinc-700 w-full h-full p-2 lg:p-6 gap-y-2 flex flex-col justify-center items-center rounded-lg ">
                    <h2 className="text-lg font-bold tracking-wide text-gray-500 dark:text-gray-300">{data.name}</h2>
                    <p className="text-sm text-justify text-gray-500 dark:text-gray-400 first-letter:pl-4">{data.desc}</p>
                </motion.div>
            </motion.div>
            <div className="flex mt-2 gap-x-2 text-yellow-600">
                {projectIcons.map((icon, index) => (
                    <a key={index}
                        href={index === 0 ? data.githubLink : data.livePreview}
                        className='hover:bg-red-400 hover:text-white rounded-lg transition-colors'>{icon}</a>
                ))}
            </div>
        </>
    )
}

export default Project
