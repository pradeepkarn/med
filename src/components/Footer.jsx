import React from 'react';
import whatsapp from "../images/whatsapp.png";
import ftlogo from "../images/footer-logo.png";
import { AiFillCaretRight, AiFillFacebook, AiFillHome, AiFillInstagram, AiFillMail, AiFillPhone, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        
        <div className='bg-safron flex flex-col md:flex-row 
        justify-around items-start px-4 md:px-8 py-8 w-full'>
            <div className='mb-4 md:mb-0 bg-black items-center'>
                <img className='fst_logo' src={ftlogo} alt="" />
            </div>
            <div className='mb-4 md:mb-0 md:ml-8'>
                <h1 className='text-lg md:text-xl uppercase text-white'>Get In Touch</h1>
                <div className='flex justify-around items-center text-white gap-2 py-2'>
                    <div>
                        <AiFillHome className='text-3xl' />
                    </div>
                    <div>
                    Dermacare 3rd floor, Building 3142,<br></br> road 4653, block 346, seef front, seef district.
                    </div>
                </div>
                <div className='flex justify-start items-center text-white gap-2 py-2'>
                    <div className='py-1'>
                        <FaPhoneAlt className='text-3xl' />
                    </div>
                    <div>
                        T: +973 3 370 0011
                        M: +973 17 400 0359
                    </div>
                </div>
                <div className='flex justify-start items-center text-white gap-2 py-2'>
                    <div>
                        <AiFillMail className='text-3xl' />
                    </div>
                    <div>
                    info@dermacare.bh
                    </div>
                </div>
            </div>
            <div className='mb-4 md:mb-0 md:ml-8'>
                <h1 className='text-lg md:text-xl uppercase text-white'>Quick Links</h1>
                <ul className='text-white ft_li'>
                    <li className='py-2 flex justify-start gap-2 items-center'>
                        <AiFillCaretRight />
                        About us
                    </li>
                    <li className='py-2 flex justify-start gap-2 items-center'>
                        <AiFillCaretRight />
                        Our Doctors
                    </li>
                    <li className='py-2 flex justify-start gap-2 items-center'>
                        <AiFillCaretRight />
                        Before and after
                    </li>
                    <li className='py-2 flex justify-start gap-2 items-center'>
                        <AiFillCaretRight />
                        Services
                    </li>
                    <li className='py-2 flex justify-start gap-2 items-center'>
                        <AiFillCaretRight />
                        Contact us
                    </li>
                </ul>
            </div>
            <div className='mb-4 md:mb-0 md:ml-8'>
                <div className='flex justify-between items-center gap-3'>
                <AiOutlineTwitter className='text-[40px]'/>
                <AiFillInstagram className='text-[40px]'/>
                <AiFillFacebook className='text-[40px]'/>
                </div>
            </div>
              {/* WhatsApp icon */}
 <div className="whatsapp-icon" target="_blank">
 <img src={whatsapp} alt="WhatsApp Icon" />
</div>
        </div>
    );
};

export default Footer;
