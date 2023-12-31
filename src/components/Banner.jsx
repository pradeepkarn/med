import React from 'react';
import backgroundImage from '../images/banner.jpg';
import womanWithLeaf from '../images/woman-with-leafe.jpg';
import { AiOutlinePlus, AiOutlineUser } from 'react-icons/ai';

const Banner = () => {
  return (
    <div className="w-full h-screen bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Content inside your banner */}
      <div className=" bg-safronLight bg-opacity-50 h-screen">
        <div className="flex justify-between items-center h-screen p-5">
          <div className='w-1/4'>
          <img
            className="h-64 w-64 md:h-96 md:w-96 xl:h-120 xl:w-120 relative md:left-16 xl:left-32 md:top-0 xl:top-8 rounded-full hidden md:block object-cover mr-4"
            src={womanWithLeaf}
            alt=""
          />
          </div>
          <div className="flex flex-col pr-8 gap-3">
            <h1 className='text-2xl mb-4 md:text-[60px] xl:text-[60px] font-bold' style={{color:'#492e13'}}>
              A Modern approach
            </h1>
            <h1 className='text-2xl mb-4 md:text-[60px] xl:text-[60px] font-bold' style={{color:'#492e13'}}>
              to Beauty
            </h1>
            <div className='flex justify-around items-center p-3 bg-white rounded-[30px]'>
              <div className='flex justify-start items-center gap-2'>
                <AiOutlineUser className='text-xl text-prime' />
                <input className='focus:border-none outline-none w-24 md:w-32 xl:w-40' type="text" placeholder='See our doctors' />
              </div>
              <span className='border-r-[2px] h-[40px] border-[#F37046]'></span>
              <div className='flex justify-start items-center gap-2'>
                <AiOutlinePlus className='text-xl text-prime' />
                <input className='focus:border-none outline-none w-24 md:w-32 xl:w-40' type="text" placeholder='Search for Specialty' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;