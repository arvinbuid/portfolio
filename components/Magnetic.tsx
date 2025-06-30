import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

type HTMLElementWithRef = React.ReactElement<{ ref?: React.Ref<HTMLElement> }>

interface MagneticProps {
    children: HTMLElementWithRef; // children can accept a ref
}

const Magnetic = ({ children }: MagneticProps) => {
    const magneticRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // add a check if magnericRef is null
        if (!magneticRef.current) return;

        const xTo = gsap.quickTo(magneticRef.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" })
        const yTo = gsap.quickTo(magneticRef.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" })

        const currentRef = magneticRef.current; // store current ref for useEffect cleanup
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = currentRef.getBoundingClientRect();
            const x = clientX - (left + width / 2)
            const y = clientY - (top + height / 2)
            xTo(x * 0.35);
            yTo(y * 0.35)
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        currentRef.addEventListener("mousemove", handleMouseMove);
        currentRef.addEventListener("mouseleave", handleMouseLeave);


        return () => {
            // remove listeners
            currentRef.removeEventListener("mousemove", handleMouseMove);
            currentRef.removeEventListener("mouseleave", handleMouseLeave);
        }
    }, [])

    return (
        React.cloneElement(children, { ref: magneticRef })
    );
}

export default Magnetic;