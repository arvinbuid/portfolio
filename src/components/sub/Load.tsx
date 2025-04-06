'use client'

import { motion } from "framer-motion";
import Image from "next/image"
import React, { useEffect, useState } from "react"

function Load() {
    const [load, setLoad] = useState(false);

    useEffect(() => {
        setLoad(true);
    }, [])

    return (
        <motion.div initial={{ top: 0 }} animate={{ top: load ? "-100%" : 0 }} transition={{ type: "keyframes", duration: 0.5 }} className="w-full h-full fixed top-0 left-0 flex justify-center items-center bg-gradient-to-t from-yellow-50 to-red-50 z-300">
            <Image src="/spinner.gif" alt="Spinner" width={50} height={50} priority />
        </motion.div>
    )
}

export default Load
