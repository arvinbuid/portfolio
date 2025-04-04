import Heading from "./sub/Heading"
import Project from "./sub/Project"

import { projectsButton } from "@/assets"

function Projects() {
    return (
        <div className="min-h-screen px-16 xl:px-96 py-20">
            <Heading text="Projects" />
            <div className="flex flex-wrap items-center justify-between gap-4 py-10">
                {projectsButton.map((button, index) => {
                    return <button key={index} className="border border-yellow-500 px-2 py-1 rounded-xl text-sm font-light tracking-wider text-gray-700 cursor-pointer">{button}</button>
                })}

            </div>
            <div className="flex flex-wrap justify-center items-center gap-4"><Project /></div>
        </div>
    )
}

export default Projects
