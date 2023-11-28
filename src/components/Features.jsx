import React, { useState } from 'react';
import backgroundImage from '../images/before1.png';
import backgroundImage2 from '../images/before2.jpg';
import backgroundImage3 from '../images/before-tattoo-removal.jpg';
import backgroundImage4 from '../images/before-lip-flip1.jpg';
import backgroundImage5 from '../images/before-lip-flip2.jpg';
import backgroundImage6 from '../images/before-lip-flip3.jpg';
import face from '../images/after1.jpg';
import face2 from '../images/after2.jpg';
import face3 from '../images/after-tattoo-removal.jpg';
import face4 from '../images/after-lip-flip1.jpg';
import face5 from '../images/after-lip-flip2.jpg';
import face6 from '../images/after-lip-flip3.jpg';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6';
const Features = () => {

    const [images] = useState([
        { face: face, background: backgroundImage },
        { face: face2, background: backgroundImage2 },
        { face: face3, background: backgroundImage3 },
        { face: face4, background: backgroundImage4 },
        { face: face5, background: backgroundImage5 },
        { face: face6, background: backgroundImage6 },
    ]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const showPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const showNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className='px-container'>
            <div className='flex items-center min-h-[600px] relative  gap-4 pt-4 pb-[150px]'>
                <div className='px-4 w-9/12 mb-5'>
                    <div className='flex flex-col justify-between gap-[46px]' style={{width:"450px"}}>
                        <div>
                            <h1 className='text-3xl font-bold'>
                                Taking care of your skin is more important than covering it up!
                            </h1>

                        </div>
                        <div>
                            <button className=' bg-black p-2 text-white rounded-[30px] mt-3 px-5'>
                                Book Now
                            </button>
                        </div>
                        <div>
                            <div className='flex justify-between items-center mt-5 shadow-2xl p-4 rounded-lg bg-[#f2e9e4]' style={{width: "400px"}}>

                                <div style={{ width: "40px", height: "40px", borderRadius: "5px", padding: "5px" }} className='py-1 flex justify-center items-center p-2 bg-white'>
                                    <FaLocationDot className='mt-2' />
                                </div>
                                <p className='ms-3'>Dermacare 3rd floor, Building 3142, road 4653, block 346, seef front, seef district.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full  relative'>
                    <div className='w-full py-1 px-4 shadow-xl rounded-[30px] bg-[#f2e9e4] h-[500px]'>
                        {/* Card Content Goes Here */}
                        <h1 className='text-black px-[50px] pt-[50px] pb-[30px] text-2xl uppercase font-bold'>View Here</h1>
                        <div className='grid grid-cols-2 gap-2'>
                        <div className='w-full'>
                <img
                    src={images[currentImageIndex].face}
                    className='absolute top-[400px] left-[100px] shadow-lg rounded-lg shadow-black h-[200px] w-[300px] object-cover'
                    alt=''
                />
                <img
                    src={images[currentImageIndex].background}
                    className='absolute shadow-lg rounded-lg left-[-100px] shadow-black h-[400px] w-[300px] object-cover'
                    alt=''
                />
            </div>
                            <div className='w-full'>
                                <h2 className='text-black text-[30px] font-[500] uppercase right-0 font-bold'>Before & After Gallery</h2>
                                <h2 className='text-black text-[20px] font-[500] uppercase right-0'>REAL CLIENTS</h2>
                                <p>
                                    As an experienced aesthetic clinic in Dubai, we have done
                                    countless procedures and thousands of satisfied patients,
                                    the results speak for themselves.
                                </p>
                                <div className='flex gap-5 py-5 items-center'>
                <button className='border-black text-[30px] border-[2px] rounded-[50%]' onClick={showPreviousImage}>
                <AiOutlineArrowLeft></AiOutlineArrowLeft>
                </button>
                <button className='border-black text-[30px] border-[2px] rounded-[50%]' onClick={showNextImage}>
                <AiOutlineArrowRight></AiOutlineArrowRight>
                </button>
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
