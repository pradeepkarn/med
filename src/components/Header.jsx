import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../images/logo.png";
const Header = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='bg-transparent p-2 absolute w-full z-10'>
            <div className='flex justify-between items-center py-[12px] max-w-[1240px] mx-auto'>
                <div className='text-3xl text-black'>
                    <img className="h-[80px]" src={Logo} alt="logo" />
                </div>
                {
                    toggle ?
                        <AiOutlineClose onClick={() => setToggle(!toggle)} className="text-white text-xl lg:hidden cursor-pointer" />
                        :
                        <AiOutlineMenu onClick={() => setToggle(!toggle)} className="text-white text-xl lg:hidden block cursor-pointer" />
                }
                <ul className='hidden lg:flex text-white font-[600] gap-5 items-center'>
                    <li className=" cursor-pointer border-b-[3px] border-[#F37046] transition duration-300">
                        Home
                    </li>
                    <li className=" cursor-pointer border-b-[3px] border-transparent hover:border-[#F37046] transition duration-300">
                        About Us
                    </li>
                    <li className=" cursor-pointer border-b-[3px] border-transparent hover:border-[#F37046] transition duration-300">
                        Services
                    </li>
                    <li className=" cursor-pointer border-b-[3px] border-transparent hover:border-[#F37046] transition duration-300">
                        Our Doctors
                    </li>
                    <li className=" cursor-pointer border-b-[3px] border-transparent hover:border-[#F37046] transition duration-300">
                        Pharmacy
                    </li>
                    <li className=" cursor-pointer border-b-[3px] border-transparent hover:border-[#F37046] transition duration-300">
                        Contact Us
                    </li>
                    <li>
                        <div className="bg-orange-500 text-white rounded-[30px] px-10 py-2">
                            Get in touch
                        </div>
                    </li>
                </ul>

                {/* responsive */}
                <ul className={`duration-500 lg:hidden block text-[#1E1D23] text-xl font-[600] fixed bg-[#949496] top-[98px] w-full h-screen ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                    <li className="p-5">
                        Home
                    </li>
                    <li className="p-5">
                        About Us
                    </li>
                    <li className="p-5">
                        Services
                    </li>
                    <li className="p-5">
                        Our Doctors
                    </li>
                    <li className="p-5">
                        Pharmacy
                    </li>
                    <li className="p-5">
                        Contact Us
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Header