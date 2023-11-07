import React from 'react'
import abtfirst from '../images/aboutleft.jpeg'
import abtsecond from '../images/abtrt.jpg'
import backgroundImage from '../images/banner.jpg';
import docts from '../images/2docs.png';
import { AiFillCaretRight } from 'react-icons/ai';
const About = () => {
    return (
        <>
            <div className='min-h-[900px] flex justify-end items-start'>
                <div className='flex justify-center items-center'>
                    <div className='pt-[30px] pl-[100px] bg-safronLight'>
                        <img className='max-h-[500px] relative top-[40px]' src={abtfirst} alt="" />
                    </div>

                    <div className='pt-[50px] pb-[100px] pr-[100px] bg-safron'>
                        <img className=' max-h-[600px] relative top-[40px]' src={abtsecond} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className='px-container'>
                    <div>
                        <h1 className='text-3xl text-prime uppercase'>
                            PROFESSIONAL AESTHETIC
                            CLINIC IN BAHRAIN
                        </h1>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='felx flex-col relative'>
                            <p className='text-prime'>
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
                                <span className=' cursor-pointer flex justify-between items-center'>see more <AiFillCaretRight/></span>
                            </button>
                            </div>
                        </div>
                        <div>
                            <img className='min-h-[500px] min-w-[500px] rounded-[50%] object-cover' src={docts} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About