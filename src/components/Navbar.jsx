import React, { useState } from 'react'
import "../index.css"
const Navbar = () => {
    const links = ["About", "Patreon", "Dribble", "Youtube", "Instagram"]

    const [current, setCurrent] = useState(0);
    console.log(current)
    return (
        <>
            <nav className='w-full h-32 flex justify-between items-center absolute top-0 left-0 z-50' style={{ padding: "0 5rem" }}>
                <div className="w-24">
                    <img className='cursor-pointer' src="https://cdn.prod.website-files.com/5ffcd643561bc26ed27a87a1/5ffcd643561bc2585a7a87b3_logo.svg" alt="" />
                </div>
                <div className="flex items-center gap-8 text-white text-md font-[font1]">
                    {
                        links.map((link, index) => {
                            return (
                                <div key={index} className='h-20 w-28cursor-pointer flex items-center justify-center group cursor-pointer' onMouseEnter={() => { setCurrent(index) }}>
                                    <h2 className={'uppercase h-11 flex flex-col items-center relative overflow-hidden'}>{link}
                                        <span className={current === 0 || current === 2 || current === 4 ? "w-full h-[0.2rem]   absolute top-[2rem] left-[-100%] transition-all duration-500 group-hover:left-0 bg-[#f88cd4]" : current === 1 || current === 3 ? "w-full h-[0.2rem]   absolute top-[2rem] left-[-100%] transition-all duration-500 group-hover:left-0 bg-yellow-400" : ""}></span>
                                    </h2>
                                </div>

                            )
                        })
                    }

                    <div className='lines h-20 flex flex-col justify-center cursor-pointer gap-[0.8rem]' style={{ marginLeft: '2.5rem' }}>
                        <div className='line1 w-[5.5rem] h-[0.19rem] rounded-full bg-white relative overflow-hidden'></div>
                        <div className='line2 w-[5.5rem] h-[0.19rem] rounded-full bg-white relative overflow-hidden'></div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
