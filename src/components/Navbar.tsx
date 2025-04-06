'use client'

import { copyRightIcon, navbarData } from "@/assets"

interface NavbarProps {
    id: string
}

function Navbar({ id }: NavbarProps) {
    const date = new Date().getFullYear();
    return (
        <div className="w-[70px] fixed h-full top-0 left-0 flex flex-col justify-between border-r border-gray-200 px-4 py-10 z-100">
            <a href="#">
                <span className="text-4xl text-red-400 font-semibold">A</span>
                <span className="dark:text-gray-300">.</span>
                <span className="block w-min rotate-90 origin-bottom font-semibold text-sm dark:text-gray-300">Buid</span>
            </a>
            <div className="flex flex-col gap-y-2 sm:gap-y-3">
                {navbarData.map((item, index) => (
                    <a href={`#${item.id}`} key={index} className="group flex flex-col items-center gap-y-2 ">
                        <span className={`text-2xl group-hover:scale-125 transition-all ${item.id === id ? "text-red-500 scale-120" : "text-yellow-600 scale-100"}`}>{item.icon}</span>
                        <span className={`text-[12px] dark:text-gray-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 duration-300 ease-in transition-all text-center tracking-wide ${index % 2 === 0 ? "translate-x-2" : "-translate-x-2"} ${item.id === id && "-translate-x-0 opacity-100"}`}>{item.name}</span>
                    </a>
                ))}
            </div>
            <p className="relative flex flex-col justify-center items-center text-sm text-gray-500 gap-y-2">
                <span className="absolute left-1/2 origin-bottom-left w-max flex items-center -rotate-90 ml-3 dark:text-gray-300">{copyRightIcon} {date}</span>
            </p>
        </div>
    )
}

export default Navbar
