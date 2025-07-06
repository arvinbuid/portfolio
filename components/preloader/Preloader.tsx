'use client'

import styles from './preloader.module.css'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import { slideUp } from './animation';
import { opacity } from './animation';

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"]

const Preloader = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index == words.length - 1) return;

        const timer = setTimeout(() => {
            setIndex(index + 1);
        }, index == 0 ? 1000 : 150);
        return () => clearTimeout(timer);
    }, [index])

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
            <motion.p variants={opacity} initial="initial" animate="enter">{words[index]}</motion.p>
        </motion.div>
    );
}

export default Preloader;