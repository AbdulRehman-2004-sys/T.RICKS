import React, { useRef } from 'react'
import "../index.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

const Navbar = () => {

    const container = useRef();

    useGSAP(() => {

        var tl = gsap.timeline();
        tl.from("nav", {
            translateY: "-85",
            duration: 0.5,
            delay: 2.5,
        })


    }, { scope: container });

    return (
        <div ref={container}>
            <nav className='w-full h-16 md:h-32 flex justify-between items-center absolute top-0 left-0 z-50' style={{ padding: "0 5rem" }}>

                <div className="w-16 md:w-24">
                    <img className='cursor-pointer' src="https://cdn.prod.website-files.com/5ffcd643561bc26ed27a87a1/5ffcd643561bc2585a7a87b3_logo.svg" alt="" />
                </div>
                <div className="flex items-center h-full uppercase text-white text-md font-[font1]">
                    <div className='hidden lg:flex'>
                        <a href="#" className='w-[90px] h-20 flex justify-center items-center'>About</a>
                        <a href="#" className='w-[100px] h-20 flex justify-center items-center'>Patreon</a>
                        <a href="#" className='w-[100px] h-20 flex justify-center items-center'>Dribble</a>
                        <a href="#" className='w-[100px] h-20 flex justify-center items-center'>Youtube</a>
                        <a href="#" className='w-[120px] h-20 flex justify-center items-center '>Instagram</a>
                        <div class="animation start-home absolute bottom-[45px] h-[3px] rounded-full transition-all duration-200 ease-in"></div>
                    </div>

                    <div className='lines h-20 flex flex-col justify-center cursor-pointer gap-[0.4rem] md:gap-[0.8rem]' style={{ marginLeft: '3.5rem' }}>
                        <div className='line1 w-[3rem] h-[0.05rem] md:w-[4.5rem] md:h-[0.1rem] lg:w-[5.5rem] lg:h-[0.19rem] rounded-full bg-white relative overflow-hidden'></div>
                        <div className='line2 w-[3rem] h-[0.05rem] md:w-[4.5rem] md:h-[0.1rem] lg:w-[5.5rem] lg:h-[0.19rem] rounded-full bg-white relative overflow-hidden'></div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
