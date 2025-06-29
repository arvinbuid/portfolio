'use client'

import styles from './description.module.css'
import { useInView, motion } from 'framer-motion';
import { useRef } from "react";
import { slideUp, opacity } from '../utils/animation';


const Description = () => {
    const phrase = "Hello. I'm Arvin Buid, a web developer from Cavite, Philippines. I'm passionate about web development and constantly learning new technologies to improve my skills and understanding as a web developer.";

    const descriptionRef = useRef(null);
    const isInView = useInView(descriptionRef);

    return (
        <div ref={descriptionRef} className={styles.description}>
            <div className={styles.body}>
                <p>
                    {
                        phrase.split(" ").map((word, index) => {
                            return <span key={index} className={styles.mask} >
                                <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span>
                            </span>
                        })
                    }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
                    The passion for web development and coding is what drives me to pursue my passion.
                </motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <div className={styles.button}>
                        <p>About Me</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Description;