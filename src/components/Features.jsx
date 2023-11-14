import React from 'react';
import backgroundImage from '../images/feature.png';
import face from '../images/face.jpg';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6';
const Features = () => {
    return (
        <div className='px-container'>
            <div className='flex items-center min-h-[600px] relative  gap-4 pt-4 pb-[150px]'>
                <div className='px-4 w-9/12 mb-5'>
                    <div className='flex flex-col justify-between gap-[100px]'>
                        <div>
                            <h1 className='text-3xl'>
                                Taking care of your skin is more important than covering it up!
                            </h1>

                        </div>
                        <div>
                            <button className=' bg-black p-2 text-white rounded-[30px] mt-3 px-5'>
                                Book Now
                            </button>
                        </div>
                        <div>
                            <div className='w-5/12 flex justify-between items-center mt-5 shadow-2xl p-4 rounded-lg bg-[#f2e9e4]'>

                                <div style={{ width: "40px", height: "40px", borderRadius: "5px", padding: "5px" }} className='py-1 flex justify-center items-center p-2 bg-white'>
                                    <FaLocationDot className='mt-2' />
                                </div>
                                OUR LOCATION
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full  relative'>
                    <div className='w-full py-1 px-4 shadow-xl rounded-[30px] bg-[#f2e9e4] h-[500px]'>
                        {/* Card Content Goes Here */}
                        <h1 className='text-black px-[50px] pt-[50px] text-3xl uppercase'>View Here</h1>
                        <div className='grid grid-cols-2 gap-2'>
                            <div className='w-full'>
                                <img src={face} className='absolute top-[400px] left-[100px] shadow-lg rounded-lg shadow-black h-[200px] w-[300px] object-cover' alt="" />
                                <img src={backgroundImage} className='absolute shadow-lg rounded-lg  left-[-100px] shadow-black h-[400px] w-[300px] object-cover' alt="" />
                            </div>
                            <div className='w-full'>
                                <h2 className='text-black text-[30px] font-[500] uppercase right-0'>Before & After Gallery</h2>
                                <h2 className='text-black text-[20px] font-[500] uppercase right-0'>REAL CLIENTS</h2>
                                <p>
                                    As an experienced aesthetic clinic in Dubai, we have done
                                    countless procedures and thousands of satisfied patients,
                                    the results speak for themselves.
                                </p>
                                <div className='flex gap-5 py-5 items-center'>

                                    <AiOutlineArrowLeft className='border-black text-[30px] border-[2px] rounded-[50%]' />

                                    <AiOutlineArrowRight className='border-black text-[30px] border-[2px] rounded-[50%]' />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
