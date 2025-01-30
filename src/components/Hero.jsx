import React, { useState } from 'react'
import styled from 'styled-components';
import "../index.css"
import Navbar from './Navbar';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

const Hero = () => {

  const container = useRef();
  const tiltRef = useRef(null);

  const [xVal, setXVal] = useState(0)
  const [yVal, setYVal] = useState(0)

  useGSAP(() => {
    const heading = document.querySelectorAll(".heading");

    heading.forEach((ele, index) => {
      const headingText = ele.textContent;

      const characters = headingText.split("");
      ele.textContent = "";

      characters.forEach((char, i) => {
        const div = document.createElement("div");
        if (index == 1) {
          if (i == 5) {
            div.style.marginRight = "1rem"
          }
        }
        div.style.transform = "translateY(4.5rem)"
        div.textContent = char;
        ele.appendChild(div);

      })
    }
    )

    console.log(heading)
    var tl = gsap.timeline();
    tl.to(".heading div", {
      translateY: "0",
      duration: 0.5,
      delay: 0.5,
      stagger: 0.05,
    }, 'ab')
    tl.to(".heading_image", {
      scale: 1,
      duration: 0.5,
      delay: 0.8,
    }, 'ab')
    tl.to(".para", {
      translateY: "0",
      duration: 0.5,
    })
    tl.to(".btn", {
      width: "90%",
      opacity: 1,
      duration: 0.5,
    })

  }, { scope: container });

  const mm = gsap.matchMedia();
  const mouseHandle = (e) => {
    setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2) / 10)
    setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height / 2) / 20)


    // large screen
    mm.add("(min-width: 1114px)", () => {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg )`,
      })
    });
  }
  const mouseHandle1 = (e) => {

    gsap.to(tiltRef.current, {
      transform: "rotate(-12deg)",
    })

  }

  return (
    <div ref={container}>
      <Navbar />
      <Main className='flex flex-col lg:flex-row relative'>
        <div className="left w-full lg:w-[50%] z-50" style={{ paddingTop: '12.5rem' }}>
          <div className='flex items-center overflow-hidden h-16 '>
            <img className='heading_image translate-x-[0.2rem] lg:-translate-x-0 h-[9vw]  lg:h-[4.5rem] scale-0' src="https://cdn.prod.website-files.com/5ffcd643561bc26ed27a87a1/5ffcd643561bc21ff17a87ad_icon.svg" alt="" />
            <h1 className='heading font-[font3] text-white text-[2.6rem] md:text-[5rem] uppercase flex leading-16 md:leading-10 lg:leading-16 translate-x-[1rem] lg:-translate-x-[0rem]  translate-y-[0.5rem] md:translate-y-0'>WEBFLOW</h1>
          </div>
          <div className='overflow-hidden h-[2.6rem] md:h-[4.5rem] '>
            <h1 className='heading heading2 font-[font3] text-white text-[2.6rem] md:text-[5rem] uppercase flex leading-10 md:leading-20 lg:leading-16 '>TRICKS AND</h1>
          </div>
          <div className='overflow-hidden '>
            <h1 className='heading font-[font3] text-white text-[2.6rem] md:text-[5rem] uppercase flex leading-10 md:leading-20 lg:leading-16 '>Wizardry</h1>
          </div>
          <div className='para_div h-16  overflow-hidden' style={{ marginTop: '3rem' }}>
            <p className='para font-[font8] text-sm md:text-xl text-white w-[90%] md:w-[80%] translate-y-16' >Giving Webflow developers a competitive edge in the industry through interactive tutorials</p>
          </div>

          <div className=' btn cursor-pointer bg-white opacity-0 h-[3.3rem] md:h-[4rem] relative w-0 overflow-hidden' style={{ padding: '0.05rem', marginTop: '2.5rem' }}>
            <div className='bg-[#0D0628] w-[70%] h-full text-sm md:text-lg font-[font8] font-extrabold uppercase flex items-center justify-center text-[#f88cd4]'>Glassmorphism tutorial</div>
            <div className='h-full w-[30%] absolute right-0 top-0 flex items-center justify-center '>
              <img className='h-[1.2rem] lg:h-[1.7rem]' src="https://cdn.prod.website-files.com/5ffcd643561bc26ed27a87a1/5ffcd643561bc2d91d7a87af_arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="right w-full lg:w-[50%] flex justify-center relative" style={{ paddingTop: '7rem' }}>
          <div ref={tiltRef} onMouseMove={(e) => { mouseHandle(e) }} onMouseLeave={(e) => { mouseHandle1(e) }} className='card w-[85%] h-[27vh] md:h-[30vh] lg:h-[50vh] border-2 border-white/40 z-50 absolute top-[8rem] md:top-[10rem] lg:top-[15rem] rounded-3xl bg-white/10 backdrop-blur-3xl shadow-lg bg-gradient-to-r -rotate-12 flex flex-col justify-between' style={{ padding: '2rem' }}>
            <div className='flex justify-between items-center'>
              <img className='h-[0.8rem] md:h-[1.2rem]' src="https://cdn.prod.website-files.com/5ffcd643561bc26ed27a87a1/5ffcd643561bc2585a7a87b3_logo.svg" alt="" />
              <img className='h-[1.6rem] md:h-[3rem]' src="https://cdn.prod.website-files.com/5ffcd643561bc26ed27a87a1/5ffd1878846c12271da4ef13_white-icon.svg" alt="" />
            </div>

            <div className='flex justify-between items-center'>
              <h1 className='text-sm md:text-xl text-white/50 font-[font1]'>4323 7645 2828 0713</h1>
              <img className='h-[1.5rem] md:h-[2rem]' src="https://cdn.prod.website-files.com/5ffcd643561bc26ed27a87a1/5ffd187853b7aaf987f0090d_white-bar.svg" alt="" />
            </div>
          </div>

          <video autoPlay muted loop className=' w-full lg:w-[90%] h-[60vh] md:h-[65vh] lg:h-[100vh]' src="https://cdn.prod.website-files.com/5ffcd643561bc26ed27a87a1/5ffcd85058323b1a1485dae4_blue-bg-transcode.mp4"></video>
        </div>

        <div className="hero_gradient1"></div>
        <div className="hero_gradient2"></div>

      </Main>
    </div>
  )
}

export default Hero;

const Main = styled.div({
  width: '100%',
  height: '130vh',
  background: '#0D0628',
  padding: '0 4.5vw',
})
