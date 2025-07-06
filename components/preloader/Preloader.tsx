'use client'

import styles from './preloader.module.css'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import { slideUp } from './animation';
import { opacity } from './animation';

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"]

const Preloader = () => {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    // Effect to get the width and height of the window
    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight })
    }, [])

    // Effect to change the words every 150 milliseconds
    useEffect(() => {
        if (index == words.length - 1) return;

        const timer = setTimeout(() => {
            setIndex(index + 1);
        }, index == 0 ? 1000 : 150);
        return () => clearTimeout(timer);
    }, [index])

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`

    type Curve = {
        initial: {
            d: string
        },
        exit: {
            d: string;
            transition: {
                duration: number;
                ease: [number, number, number, number];
                delay: number;
            }
        }
    }

    const curve: Curve = {
        initial: {
            d: initialPath
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
        }
    }

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
            <motion.p variants={opacity} initial="initial" animate="enter">{words[index]}</motion.p>
            {
                dimension.height > 0 && (
                    <svg>
                        <motion.path variants={curve} initial="initial" exit="exit" d={initialPath}></motion.path>
                    </svg>
                )
            }
        </motion.div>
    );
}

export default Preloader;