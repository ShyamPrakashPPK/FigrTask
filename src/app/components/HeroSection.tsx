import Buttons from './Buttons';
import Image from 'next/image';
import React, { useRef } from 'react';
import { useTransform, useScroll, motion } from 'framer-motion';
import useDimension from '../hooks/useDimension';


const HeroSection = () => {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['0.9 1', '1 0.1'],
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <>
            <section className='px-80 pt-44 pb-40'>
                
                <motion.div ref={container} style={{ opacity }}  className=' custom-cursor flex flex-col place-content-center border border-stone-800 rounded-2xl w-11/12'>
                    <div className="flex flex-row p-2 gap-1">
                        <div className="">
                            <span className="border border-stone-800 inline-block center w-5 h-5 rounded-full"></span>
                        </div>
                        <div className="circle">
                            <span className="border border-stone-800 inline-block center w-5 h-5 rounded-full"></span>
                        </div>
                        <div className="circle">
                            <span className="border border-stone-800 inline-block center w-5 h-5 rounded-full"></span>
                        </div>
                    </div>

                    <div className='bg-[#191919] rounded-xl ml-2 mr-20 mb-2'>
                        <div className=" ">
                            <div>
                                <Buttons />
                            </div>
                            <div className="grid grid-cols-2 h-[800px]">
                                <div className="col-span-1 p-10">
                                    <div className="text w-full">
                                        <div className='flex flex-row'>
                                            <div className='flex flex-row text-center items-center text-3xl font-bold text-[#3c3297]' >
                                                <Image height={50} width={50} src={'/images/star.png'} alt={'cursor'} />Workflow
                                            </div>
                                        </div>
                                        <div className='text-[75px] font-extrabold'>Present anywhere. Anytime.</div>
                                        <div className='text-2xl text-stone-500 font-light pt-5'>Transform your stories into a bite-sized format tailored for mobile. Quickly browse the summary and dive deeper when needed.</div>
                                    </div>
                                </div>

                                <div className='col-span-1 p-20'>
                                    <div className="flex flex-col">
                                        <div className='card bg-[#6a6a6a] rounded-xl h-96 m-10 '>
                                            <div className="h-[550px] w-[400px] ">
                                                1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default HeroSection;
