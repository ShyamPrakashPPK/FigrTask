import React, { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextReveal = () => {
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const textElement = textRef.current;

        if (textElement) {
            const splitText = new SplitType(textElement, { types: 'chars' });

            // Use splitText.chars directly in the animation
            gsap.from(splitText.chars, {
                scrollTrigger: {
                    trigger: textElement,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true,
                    markers: false,
                },
                opacity: 0.2,
                stagger: 0.01,
            });
        }
    }, []);

    return (
        <section className=' md:ml-[400px] p-10 md:pt-[1200px] md:pb-[1800px] max-w-7xl h-screen'>
            <p className="reveal text-[80px] font-bold leading-tight" ref={textRef}>
                In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the
            </p>
        </section>
    );
};

export default TextReveal;
