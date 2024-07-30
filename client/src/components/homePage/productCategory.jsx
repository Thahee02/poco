import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Burger from '../../assets/burger.png'
import Chicken from '../../assets/chicken.png'
import Sauce from '../../assets/sauce.png'
import Drink from '../../assets/drink.png'
import Pizza from '../../assets/pizza.png'
import { Link } from "react-router-dom";
const ProductCategorySection = () => {

    const responsive = {
        abovexl: {
            breakpoint: { max: 4000, min: 1536 },
            items: 4
        },
        xl: {
            breakpoint: { max: 1536, min: 1280 },
            items: 4
        },
        lg: {
            breakpoint: { max: 1280, min: 1024 },
            items: 3
        },
        md: {
            breakpoint: { max: 1024, min: 768 },
            items: 2
        },
        sm: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        }
    };

    return ( 
        <div className='max-sm:px-2 max-md:px-16 xl:mx-14 py-20'>
            <Carousel responsive={responsive} infinite={true}  centerMode={false} autoPlay={true} autoPlaySpeed={5000} transitionDuration={1000} className='max-sm:px-20 max-md:px-24 max-lg:px-10 lg:px-4 xl:px-4 '>
                <Link to={'/shop/burger'} className='cursor-default'>
                    <div className='w-80 h-32 bg-orange-400 rounded-lg pl-8 pr-4 py-2 text-white flex items-center justify-between font-roboto cursor-pointer group'>
                        <div className='flex flex-col gap-2'>
                            <h4 className='font-bold'>BURGER</h4>
                            <p className='text-xs'>0 Products</p>
                        </div>
                        <div className='flex items-center'>
                            <img src={Burger} alt="" className='w-32 h-32 group-hover:scale-105 transition-all ease-in-out duration-300' />
                        </div>
                    </div>
                </Link>
                <Link to={'/shop/chicken'} className='cursor-default'>
                    <div className='w-80 h-32 bg-red-800 rounded-lg pl-8 pr-4 py-2 text-white flex items-center justify-between font-roboto cursor-pointer group'>
                        <div className='flex flex-col gap-2'>
                            <h4 className='font-bold'>CHICKEN</h4>
                            <p className='text-xs'>0 Products</p>
                        </div>
                        <div className='flex items-center'>
                            <img src={Chicken} alt="" className='w-24 h-24 group-hover:scale-105 transition-all ease-in-out duration-300' />
                        </div>
                    </div>
                </Link>
                <Link to={'/shop/sauce'} className='cursor-default'>
                    <div className='w-80 h-32 bg-green-600 rounded-lg pl-8 pr-4 py-2 text-white flex items-center justify-between font-roboto cursor-pointer group'>
                        <div className='flex flex-col gap-2'>
                            <h4 className='font-bold'>SAUCES</h4>
                            <p className='text-xs'>0 Products</p>
                        </div>
                        <div className='flex items-center'>
                            <img src={Sauce} alt="" className='w-32 h-32 group-hover:scale-105 transition-all ease-in-out duration-300' />
                        </div>
                    </div>
                </Link>
                <Link to={'/shop/drink'} className='cursor-default'>
                    <div className='w-80 h-32 bg-pink-500 rounded-lg pl-8 pr-4 py-2 text-white flex items-center justify-between font-roboto cursor-pointer group'>
                        <div className='flex flex-col gap-2'>
                            <h4 className='font-bold'>DRINKS</h4>
                            <p className='text-xs'>0 Products</p>
                        </div>
                        <div className='flex items-center'>
                            <img src={Drink} alt="" className='w-28 h-28 group-hover:scale-105 transition-all ease-in-out duration-300' />
                        </div>
                    </div>
                </Link>
                <Link to={'/shop/pizza'} className='cursor-default'>
                    <div className='w-80 h-32 bg-blue-400 rounded-lg pl-8 pr-4 py-2 text-white flex items-center justify-between font-roboto cursor-pointer group'>
                        <div className='flex flex-col gap-2'>
                            <h4 className='font-bold'>PIZZA</h4>
                            <p className='text-xs'>0 Products</p>
                        </div>
                        <div className='flex items-center'>
                            <img src={Pizza} alt="" className='w-28 h-28 group-hover:scale-105 transition-all ease-in-out duration-300' />
                        </div>
                    </div>
                </Link>
                
                
            </Carousel>
        </div>
     );
}
 
export default ProductCategorySection;