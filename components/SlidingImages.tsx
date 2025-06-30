import styles from './slidingImages.module.css'

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';

const slider = [
    {
        color: "#e3e5e7",
        src: "dapper-fit.png"
    },
    {
        color: "#d6d7dc",
        src: "property-hub.png"
    },
    {
        color: "#e3e3e3",
        src: "primecare.png"
    },
    {
        color: "#21242b",
        src: "workhive.png"
    }
]
const SlidingImages = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })
    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (
        <div ref={containerRef} className={styles.slidingImages}>
            <motion.div style={{ x: x1 }} className={styles.slider}>
                {
                    slider.map((project, index) => {
                        return <div
                            key={index}
                            className={styles.project}
                            style={{ backgroundColor: project.color }}
                        >
                            <div className={styles.imageContainer}>
                                <Image
                                    fill={true}
                                    alt={"image"}
                                    src={`/images/${project.src}`}
                                />
                            </div>
                        </div>
                    })
                }
            </motion.div>
            <motion.div style={{ height }} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>
        </div>
    );
}

export default SlidingImages;