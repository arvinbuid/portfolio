'use client'

import styles from './contact.module.css';

import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Magnetic from './Magnetic';

const Contact = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end end']
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])

    return (
        <motion.div style={{ y }} ref={containerRef} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <h2>Let&apos;s Work</h2>
                    </span>
                    <h2>together</h2>
                    <motion.div style={{ x }} className={styles.buttonContainer}>
                        <div className={styles.button}>
                            <p>Get in touch</p>
                        </div>
                    </motion.div>
                    <motion.svg style={{ rotate, scale: 2 }} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white" />
                    </motion.svg>
                </div>
                <div className={styles.nav}>
                    <div className={styles.button}>
                        <a href="mailto:arvinbuid01@gmail.com">arvinbuid01@gmail.com</a>
                    </div>
                    <div className={styles.button}>
                        <p>+639 210 682 950</p>
                    </div>
                    <div className={styles.button}>
                        <p><a href="/work-resume.pdf" download=''>Download Resume</a></p>
                    </div>
                </div>
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>VERSION</h3>
                            <p>2025 © Arvin Buid</p>
                        </span>
                        {/* <span>
                            <h3>LOCAL TIME</h3>
                            <p>11:35 AM GMT+8</p>
                        </span> */}
                    </div>

                    {/* Magnetic Components */}
                    <div>
                        <span>
                            <h3>SOCIALS</h3>
                            <Magnetic>
                                <p><a href="https://www.facebook.com/arvinbuid22/" target='_blank'>Facebook</a></p>
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <p><a href="https://github.com/arvinbuid/" target='_blank'>Github</a></p>
                        </Magnetic>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}

export default Contact;