import { BsFillCircleFill } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import MultiSlider from './MultiSlider';
import '../App.css';

const Testimonials = () => {
    return (
        <div>
            <MultiSlider />
            <div className='w-full h-screen flex justify-center items-center bg-gradient top-0'>
                <div className="hidden lg:block relative">
                    <FaQuoteLeft className=" text-[100px] absolute text-safron left-[250px] top-[-200px]" />
                    <FaQuoteLeft className=" text-[200px] absolute text-[#ffffff4b] left-[100px] top-[-100px]" />
                </div>
                <div className='text-center relative'>
                    <h2 className='text-6xl font-Yesteryear mb-2 italic'>Testimonials</h2>
                    <h1 className='text-4xl font-bold mb-4 uppercase'>Here from our clients</h1>
                    <p className='text-base text-justify px-[20px] lg:px-[400px]'>
                        Was very happy after doing my laser hair removal session on my face. I suffer from vitiligo and the doctor came in and she advised the nurse to reduce heat in certain areas not to burn my skin. I was very happy with the caring services of the staff and doctors. Lovely clean minimal layout, the best cosmetic clinic in Bahrain! 10/10 for cleanliness, service, attentiveness, and outcome of procedures! Excellent doctor and amazing service.
                    </p>
                </div>
                <div className="hidden lg:block relative">
                    <div className="flex flex-col items-center justify-center gap-2 text-[30px] text-safron absolute right-[200px]">
                        <BsFillCircleFill />
                        <BsFillCircleFill />
                        <BsFillCircleFill />
                        <BsFillCircleFill />
                        <BsFillCircleFill />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Testimonials;
