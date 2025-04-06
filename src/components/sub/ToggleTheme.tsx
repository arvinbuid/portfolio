'use client'

import { moonIcon, sunIcon } from "@/assets"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { reactLocalStorage } from "reactjs-localstorage"


interface ToggleThemeProps {
    children: React.ReactNode
}

function ToggleTheme({ children }: ToggleThemeProps) {
    const [darkTheme, setDarkTheme] = useState(false);
    const mainRef = useRef<HTMLDivElement>(null);

    // Keep dark theme state even after refresh
    useEffect(() => {
        const darkTheme = reactLocalStorage.get('darkTheme') as string;
        const darkThemeParsed = darkTheme !== undefined && JSON.parse(darkTheme);

        if (darkThemeParsed) {
            addDarkTheme();
        } else {
            removeDarkTheme();
        }
    }, [])

    const addDarkTheme = () => {
        mainRef.current?.classList.add('dark');
        setDarkTheme(true);
        reactLocalStorage.set('darkTheme', true);
    }

    const removeDarkTheme = () => {
        mainRef.current?.classList.remove('dark');
        setDarkTheme(false);
        reactLocalStorage.set('darkTheme', false);
    }

    return (
        <main ref={mainRef}>
            <div className="bg-zinc-50 dark:bg-zinc-800">
                <div className="w-screen xl:max-w-[1200px] mx-auto flex justify-center px-20 xl:px-[90px] pr-5 overflow-hidden">
                    <button className="fixed right-10 sm:right-14 top-10 text-yellow-600 hover:text-yellow-500 cursor-pointer z-999"
                        onClick={darkTheme ? removeDarkTheme : addDarkTheme}>
                        <motion.span animate={{ scale: darkTheme ? 0 : 1 }} className="absolute block text-4xl bg-zinc-50 rounded-full dark:bg-zinc-800 p-1">{moonIcon}</motion.span>
                        <motion.span animate={{ scale: darkTheme ? 1 : 0 }} className="absolute block text-3xl bg-zinc-50 rounded-full dark:bg-zinc-800 p-1">{sunIcon}</motion.span>
                    </button>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default ToggleTheme
