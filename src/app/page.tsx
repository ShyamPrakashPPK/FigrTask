"use client"
import Image from 'next/image'
import Link from 'next/link'
import VanillaTilt from 'vanilla-tilt'
import { useEffect } from 'react'
import App from "./parallaxText";
import TextReveal from './components/TextReveal'
import HeroSection from './components/HeroSection'
import ParallaxSection from './components/ParallaxSection'


export default function Home() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const cardsArray = Array.from(cards) as HTMLElement[];
    VanillaTilt.init(cardsArray, {
      max: 4,
      speed: 5,
      glare: true,
      'max-glare': 0
    });
  }, []);

  return (

    <main className=" ">

      {/* card section 
            cursor hovereffects, on scroll disapplear */}

      <HeroSection />



      {/* featured and seen in */}
      <section className='pt-52 pb-14'>
        <h3 className='text-center text-white font-bold text-6xl py-10' >Featured and Seen in</h3>
        <div className='flex flex-row gap-5 place-content-center'>

          <div className='bg-[#191919] rounded-xl h-1/2 p-5'>
            <Image className='md:w-[300px]' height={200} width={150} src={'/images/logo-bi.svg'} alt={'cursor'}></Image>
          </div>

          <div className='bg-[#191919] rounded-xl h-1/2 p-5'>
            <Image className='md:w-[300px]' height={200} width={150} src={'/images/logo-bi.svg'} alt={'cursor'}></Image>
          </div>

          <div className='bg-[#191919] rounded-xl h-1/2 p-5'>
            <Image className='md:w-[300px]' height={200} width={150} src={'/images/logo-bi.svg'} alt={'cursor'}></Image>
          </div>

          <div className='bg-[#191919] rounded-xl h-1/2 p-5'>
            <Image className='md:w-[300px]' height={200} width={150} src={'/images/logo-bi.svg'} alt={'cursor'}></Image>
          </div>

          <div className='bg-[#191919] rounded-xl h-1/2 p-5'>
            <Image className='md:w-[300px]' height={200} width={150} src={'/images/logo-bi.svg'} alt={'cursor'}></Image>
          </div>

        </div>

        <div className='flex  mt-32 place-content-center border border-stone-900 mx-20 '></div>
        <div className='h-screen'></div>
      </section>




      {/* parallax effect area */}

      <section className='md:px-[200px] pt-20 pb-96'>
        <ParallaxSection />
      </section>


      {/* text reveal area */}
      <div className='h-screen'></div>
      <TextReveal />



      {/* three card section one full on top and two on bottom */}
      <section className='px-[400px]'>
        <div className='grid grid-cols-4 gap-3 '>
          <div className='col-span-4 '>
            <div className='bg-[#101010] rounded-xl h-full p-10 '>
              <Image className='' height={1000} width={1500} src={'/images/sectionImage1.png'} alt={'cursor'}></Image>
            </div>
          </div>
          <div className='col-span-2  hover:scale-105 transition-all duration-500'>
            <div className='bg-[#101010] rounded-xl h-full p-10 '>
              <Image className='' height={400} width={550} src={'/images/sectionImage2.png'} alt={'cursor'}></Image>
            </div>
          </div>
          <div className='col-span-2  hover:scale-105 transition-all duration-500'>
            <div className='bg-[#101010] rounded-xl h-full p-10 '>
              <Image className='' height={400} width={550} src={'/images/sectionImage3.png'} alt={'cursor'}></Image>
            </div>
          </div>
        </div>
        <div className='flex  mt-32 place-content-center border border-stone-900 mx-20'></div>

      </section>



      {/* text static and card scroll section*/}
      {/* <ScrollCards imgUrls={['/images/10.png']} sectionTitles={[]}/> */}
      <section className='p-[400px]'>
        <div className="grid grid-cols-2">
          <div className=" col-span-1 p-20">
            <div className="text w-full h-screen ">
              <div className='flex flex-row'>
                <div className='flex flex-row text-center items-center text-3xl font-bold text-[#3c3297]' ><Image height={50} width={50} src={'/images/star.png'} alt={'cursor'} />Workflow</div>
              </div>
              <div className='text-[75px] font-extrabold'>Create at the speed of thought.</div>
              <div className='text-2xl text-gray-500 font-light pt-5'>Focus on your getting your thoughts out and crafting the best message while Chronicle does the heavy lifting for you</div>
            </div>
          </div>

          <div className='col-span-1  max-h-[600px]'>
            <div className="flex flex-col overflow-scroll">
              <div className='bg-[#191919] rounded-xl h-96 m-10 '>
                <div className=" h-[550px] w-[400px] ">

                </div>
              </div>
              <div className='bg-[#191919] rounded-xl h-96 m-10'>
                <div className=" h-[550px] w-[400px] ">

                </div>
              </div>
              <div className='bg-[#191919] rounded-xl h-96 m-10'>
                <div className=" h-[550px] w-[400px] ">

                </div>
              </div>
            </div>
          </div>



        </div>


      </section>




    

      <section className='p-10'>
        <div className='bg-[#191919] w-full  rounded-2xl'>
          <div className="grid grid-cols-2">
            <div className=" col-span-1 p-10">
              <div className="text w-full ">
                <div className='flex flex-row'>
                  <div className='flex flex-row text-center items-center text-3xl font-bold text-[#3c3297]' ><Image height={50} width={50} src={'/images/star.png'} alt={'cursor'} />Workflow</div>
                </div>
                <div className='text-[75px] font-extrabold'>Present anywhere. Anytime.</div>
                <div className='text-2xl text-stone-500 font-light pt-5'>Transform your stories into a bite-sized format tailored for mobile. Quickly browse the summary and dive deeper when needed.</div>
              </div>
            </div>


            <div className='col-span-1 p-20'>
              <div className="flex flex-col ">
                <div className='card bg-[#6a6a6a] rounded-xl h-96 m-10 '>
                  <div className=" h-[550px] w-[400px] ">
                    
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>



      <section className='p-10 mt-32'>

        <div className="text-center w-full ">
          <div className='flex text-center flex-row'>
            <div className='flex flex-row  items-center  text-3xl font-bold text-[#3c3297]' ><Image height={50} width={50} src={'/images/star.png'} alt={'cursor'} />Templates</div>
          </div>
          <div className='text-[70px] font-bold'>Start closer to the finish line with templates made by industry experts</div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className='card col-span-1 bg-[#191919] rounded-xl h-96 m-10 '>
            <div className=" h-[550px] w-[400px] ">

            </div>
          </div>
          <div className='card col-span-1 bg-[#191919] rounded-xl h-96 m-10 '>
            <div className=" h-[550px] w-[400px] ">

            </div>
          </div>
          <div className='card col-span-1 bg-[#191919] rounded-xl h-96 m-10 '>
            <div className=" h-[550px] w-[400px] ">

            </div>
          </div>
        </div>

      </section>


      <App />

      <div className="h-screen"></div>


    </main>
  )
}
