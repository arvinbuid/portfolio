'use client'

import styles from './hero.module.css'
import { useState, useEffect } from 'react';

export default function Hero() {
    const [windowsWidth, setWindowsWidth] = useState(0);

    useEffect(() => {
        setWindowsWidth(window.innerWidth);
    }, [])

    const colorize = (el: HTMLDivElement) => {
        el.style.backgroundColor = 'white'
        setTimeout(() => {
            el.style.backgroundColor = 'transparent';
        }, 300)
    }

    const getBlocks = () => {
        const blockSize = windowsWidth * 0.05;
        const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);

        return [...Array(nbOfBlocks).keys()].map((_, index) => {
            return <div onMouseEnter={(e) => { colorize(e.target as HTMLDivElement) }} key={index}></div>
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <p>Hello, I&apos;m Arvin Buid. A web developer from Cavite, Philippines.</p>
            </div>
            <div className={styles.grid}>
                {
                    windowsWidth > 0 && [...Array(20).keys()].map((_, index) => {
                        return <div key={index} className={styles.column}>
                            {
                                getBlocks()
                            }
                        </div>
                    })
                }
            </div>
        </div>
    );
}
