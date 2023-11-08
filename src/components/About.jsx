import React from 'react'
import abtfirst from '../images/aboutleft.jpeg'
import abtsecond from '../images/abtrt.jpg';
import docts from '../images/2docs.png';
import { AiFillCaretRight, AiFillPlusCircle } from 'react-icons/ai';

const About = () => {
    return (
        <div>
            <div className='min-h-[700px] flex justify-end items-start relative '>
                <div className='flex justify-center items-center relative'>
                    <div style={{ left:0, position:"absolute", borderLeft: "3px solid #1E1D23", borderBottom: "3px solid red",height:"200px",top:"400px"}}></div>
                    <div style={{  borderBottom: "3px solid #1E1D23",height:"700px"}}>
                        <p style={{position:"absolute",top:"600px"}}>
                            <div style={{top:"20px",borderRadius:"20px",marginLeft:"-60px", fontSize:"20px"}} className=' bg-prime px-5 py-1 text-white'>
                                About Us
                            </div>
                        </p>
                        <div className='pt-[30px] pl-[100px] bg-safronLight'>
                            <img className='max-h-[500px] relative top-[40px]' src={abtfirst} alt="" />
                        </div>
                    </div>
                    


                    <div className='pt-[50px] pb-[100px] pr-[100px] bg-safron'>
                        <img className=' max-h-[600px] relative top-[40px]' src={abtsecond} alt="" />
                    </div>
                </div>
            </div>
            <div style={{ zIndex: "10" }}>
                <div className='px-container'>
                    <div>
                        <h1 className='text-3xl text-prime uppercase'>
                            PROFESSIONAL AESTHETIC
                            CLINIC IN BAHRAIN
                        </h1>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='felx flex-col relative w-3/4'>
                            <p className='text-prime text-2xl'>
                                Dermacare is the only cosmetic clinic in Dubai that focuses exclusively on
                                Hollywood-level non-surgical aesthetic treatments in Dubai. Using state-of-the-art
                                technology and a bespoke approach, we have reimagined the traditional strategy for
                                anti-aging. As a professional aesthetic clinic in Dubai, we focus on the individual, our
                                talented and visionary doctors assess your concerns through an extensive
                                consultation and create a luxurious treatment plan using holistic procedures and
                                techniques. More importantly, our treatments are designed to give you optimum
                                results, leaving you feeling and looking your best.
                            </p>
                            <div className='py-3 absolute right-0'>
                                <button className='p-1 px-2 text-white bg-safron rounded-[5px]'>
                                    <span className=' cursor-pointer flex justify-between items-center'>see more <AiFillCaretRight /></span>
                                </button>
                            </div>
                        </div>
                        <div className='relative'>
                            <AiFillPlusCircle className='absolute right-[-100px] text-safron text-[200px]' />
                            <img className='h-[500px] w-[600px] rounded-[50%] object-cover' src={docts} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About