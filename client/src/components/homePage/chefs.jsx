import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";
import Chef from '../../assets/chef.jpg'

const ChefsSection = () => {

    const responsive = {
        abovexl: {
            breakpoint: { max: 4000, min: 1536 },
            items: 3
        },
        xl: {
            breakpoint: { max: 1536, min: 1280 },
            items: 3
        },
        lg: {
            breakpoint: { max: 1280, min: 1024 },
            items: 2
        },
        md: {
            breakpoint: { max: 1024, min: 768 },
            items: 1
        },
        sm: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    };

    return ( 
        <div className='max-sm:px-2 max-md:px-16 xl:mx-14 py-10'>
            <h1 className='text-5xl font-bold pl-4 mb-10 max-lg:text-center'>Our talented chefs</h1>
            <Carousel responsive={responsive} infinite={true}  centerMode={false} autoPlay={true} autoPlaySpeed={7500} transitionDuration={1000} className='max-sm:px-10 max-md:px-24 max-lg:px-48 lg:px-16 xl:px-10 '>
                <div className='w-[400px] h-[600px] border-2 rounded-3xl px-3 py-3 text-white flex flex-col items-center gap-5 font-roboto cursor-pointer relative group'>
                    <div className='w-full h-[450px] flex items-center justify-center '>
                        <img src={Chef} alt="" className='w-full h-full rounded-2xl transition-all ease-in-out duration-300' />
                    </div>                    
                    <div className='self-start px-2'>               
                        <div className='flex items-center gap-2 mt-2 pl-0.5'>
                            <h3 className='text-black hover:text-yellow-500 text-xl font-bold '>Savannah</h3>
                            <span className='text-black text-sm px-3 py-1 rounded bg-yellow-400'>Designer</span>
                        </div>
                        <div className='py-3 h-16 text-ellipsis overflow-hidden ...'>
                            <p className='text-gray-400 pl-0.5'>Everything We Pizza, We Pizza with Love. Designer Fastfood.</p>
                        </div>
                    </div>
                </div>
                <div className='w-[400px] h-[600px] border-2 rounded-3xl px-3 py-3 text-white flex flex-col items-center gap-5 font-roboto cursor-pointer relative group'>
                    <div className='w-full h-[450px] flex items-center justify-center '>
                        <img src={Chef} alt="" className='w-full h-full rounded-2xl transition-all ease-in-out duration-300' />
                    </div>                    
                    <div className='self-start px-2'>               
                        <div className='flex items-center gap-2 mt-2 pl-0.5'>
                            <h3 className='text-black hover:text-yellow-500 text-xl font-bold '>Savannah</h3>
                            <span className='text-black text-sm px-3 py-1 rounded bg-yellow-400'>Designer</span>
                        </div>
                        <div className='py-3 h-16 text-ellipsis overflow-hidden ...'>
                            <p className='text-gray-400 pl-0.5'>Everything We Pizza, We Pizza with Love. Designer Fastfood.</p>
                        </div>
                    </div>
                </div>
                <div className='w-[400px] h-[600px] border-2 rounded-3xl px-3 py-3 text-white flex flex-col items-center gap-5 font-roboto cursor-pointer relative group'>
                    <div className='w-full h-[450px] flex items-center justify-center '>
                        <img src={Chef} alt="" className='w-full h-full rounded-2xl transition-all ease-in-out duration-300' />
                    </div>                    
                    <div className='self-start px-2'>               
                        <div className='flex items-center gap-2 mt-2 pl-0.5'>
                            <h3 className='text-black hover:text-yellow-500 text-xl font-bold '>Savannah</h3>
                            <span className='text-black text-sm px-3 py-1 rounded bg-yellow-400'>Designer</span>
                        </div>
                        <div className='py-3 h-16 text-ellipsis overflow-hidden ...'>
                            <p className='text-gray-400 pl-0.5'>Everything We Pizza, We Pizza with Love. Designer Fastfood.</p>
                        </div>
                    </div>
                </div>
                <div className='w-[400px] h-[600px] border-2 rounded-3xl px-3 py-3 text-white flex flex-col items-center gap-5 font-roboto cursor-pointer relative group'>
                    <div className='w-full h-[450px] flex items-center justify-center '>
                        <img src={Chef} alt="" className='w-full h-full rounded-2xl transition-all ease-in-out duration-300' />
                    </div>                    
                    <div className='self-start px-2'>               
                        <div className='flex items-center gap-2 mt-2 pl-0.5'>
                            <h3 className='text-black hover:text-yellow-500 text-xl font-bold '>Savannah</h3>
                            <span className='text-black text-sm px-3 py-1 rounded bg-yellow-400'>Designer</span>
                        </div>
                        <div className='py-3 h-16 text-ellipsis overflow-hidden ...'>
                            <p className='text-gray-400 pl-0.5'>Everything We Pizza, We Pizza with Love. Designer Fastfood.</p>
                        </div>
                    </div>
                </div>
                <div className='w-[400px] h-[600px] border-2 rounded-3xl px-3 py-3 text-white flex flex-col items-center gap-5 font-roboto cursor-pointer relative group'>
                    <div className='w-full h-[450px] flex items-center justify-center '>
                        <img src={Chef} alt="" className='w-full h-full rounded-2xl transition-all ease-in-out duration-300' />
                    </div>                    
                    <div className='self-start px-2'>               
                        <div className='flex items-center gap-2 mt-2 pl-0.5'>
                            <h3 className='text-black hover:text-yellow-500 text-xl font-bold '>Savannah</h3>
                            <span className='text-black text-sm px-3 py-1 rounded bg-yellow-400'>Designer</span>
                        </div>
                        <div className='py-3 h-16 text-ellipsis overflow-hidden ...'>
                            <p className='text-gray-400 pl-0.5'>Everything We Pizza, We Pizza with Love. Designer Fastfood.</p>
                        </div>
                    </div>
                </div>
                
            </Carousel>
        </div>
     );
}
 
export default ChefsSection;