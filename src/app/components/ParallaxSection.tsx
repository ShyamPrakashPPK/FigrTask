import Image from 'next/image';
import React, { useRef } from 'react';
import { useTransform, useScroll, motion } from 'framer-motion';
import useDimention from '../hooks/useDimension';
import styles from '../parallax.module.scss'

interface ColumnProps {
    images: string[];
    y?: import('framer-motion').MotionValue<number>;
}

const images = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
    '11.png',
];

const ParallaxSection: React.FC = () => {
    const container = useRef(null);

    const { height } = useDimention(); 

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['0 1', '1 0'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [2, height * 2.5]);
    const y2 = useTransform(scrollYProgress, [0, 1], [3, height * 2.4]);
    const y3= useTransform(scrollYProgress, [0, 1], [4, height * 2.5]);
    const y4 = useTransform(scrollYProgress, [0, 1], [2, height * 2.6]);
    const y5 = useTransform(scrollYProgress, [0, 1], [1, height * 2.3]);
    const y6 = useTransform(scrollYProgress, [0, 1], [2, height * 2.7]);


    return (
        <>
         
        <section className={styles.main} >
          
            <div ref={container} className={styles.gallery}>
               
                <Column images={[images[0], images[1]]} y={y} />
                <Column images={[images[2], images[3]]} y={y2} />
                <Column images={[images[4]]} y={y3} />
                <Column images={[images[5], images[6]]} y={y4} />
                <Column images={[images[7], images[8]]} y={y5} />
                <Column images={[images[9], images[10]]} y={y6} />

            </div>
            </section>
        </>
    );
};

const Column: React.FC<ColumnProps> = ({ images, y }) => {
    return (
        <motion.div style={{ y }} className={styles.column}>
            {images.map((src, index) => (
                <div key={index} className={styles.imageContainer}>
                    <Image className='rounded-2xl' src={`/images/${src}`} width={500} height={100} alt='' />
                </div>
            ))}
        </motion.div>
    );
};

export default ParallaxSection;
