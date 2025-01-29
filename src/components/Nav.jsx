import React, { useRef, useState } from 'react'
import "../index.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { NavLink } from 'react-router-dom';
gsap.registerPlugin(useGSAP);


const Navbar = () => {
    const links = ["About", "Patreon", "Dribble", "Youtube", "Instagram"]
    const [current, setCurrent] = useState(0);
    const [active, setActive] = useState();
    const container = useRef();

    useGSAP(() => {
  
        var tl = gsap.timeline();
        tl.from(".nav", {
          translateY: "-80",
          duration: 0.5,
          delay: 2.5,
        })

    
      }, { scope: container });
    return (
        <div ref={container}>
            <nav className='w-full h-32 flex justify-between items-center absolute top-0 left-0 z-50' style={{ padding: "0 5rem" }}>
                <div className="w-24">
                    <img className='cursor-pointer' src="https://cdn.prod.website-files.com/5ffcd643561bc26ed27a87a1/5ffcd643561bc2585a7a87b3_logo.svg" alt="" />
                </div>
                <div className="flex items-center h-full text-white text-md font-[font1] ">
                    {
                        links.map((link, index) => {
                            return (
                                <div key={index} className='h-20 w-28 flex items-center justify-center group cursor-pointer ' onMouseEnter={() => { setCurrent(index) }} onClick={()=>setActive(index)}>
                                    <a className='uppercase h-11 flex flex-col justify-center relative overflow-hidden'>
                                        <h2 style={{marginBottom:'0.2rem'}}>{link}</h2>
                                        <span className={current === 0 || current === 2 || current === 4 ? "w-full h-[0.2rem]   absolute top-[2rem] left-[-100%] transition-all duration-500 group-hover:left-0 bg-[#f88cd4]" : current === 1 || current === 3 ? "w-full h-[0.2rem]   absolute top-[2rem] left-[-100%] transition-all duration-500 group-hover:left-0 bg-yellow-400" : current===index ? "w-full h-[0.2rem]  absolute top-[2rem] left-0 bg-[#f88cd4]":""}></span>
                                    </a>
                                </div>

                            )
                        })
                    }

                    <div className='lines h-20 flex flex-col justify-center cursor-pointer gap-[0.8rem]' style={{ marginLeft: '3.5rem' }}>
                        <div className='line1 w-[5.5rem] h-[0.19rem] rounded-full bg-white relative overflow-hidden'></div>
                        <div className='line2 w-[5.5rem] h-[0.19rem] rounded-full bg-white relative overflow-hidden'></div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
