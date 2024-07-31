import { Link } from "react-router-dom";
import BurgerFlying from '../../assets/burger-flying.png'

const BannerSecondSection = () => {
    return ( 
        <div className="w-full bg-red-950 my-20 py-16 lg:py-10 flex max-md:flex-col px-4 items-center justify-center max-lg:gap-10 lg:gap-6 xl:gap-20 text-white max-lg:flex-wrap">
            <div className="flex-wrap w-full lg:w-72 xl:w-80">
                <h1 className="text-4xl font-bold">We are more than multiple survice</h1>
                <p className="py-8 text-sm">This is a type of restaurant which typically serves food and drinks, in addition to light refreshments such as baked goods or snacks. The term comes from the rench word meaning food.</p>
                <Link to={'/shop'}>
                    <button className='bg-yellow-400 hover:bg-white text-gray-800 px-6 py-4 md:px-8 md:py-4 lg:px-12 lg:py-4 rounded-lg font-semibold transition-all ease-in-out duration-300'>DISCOVER NOW</button>
                </Link>
            </div>
            <div className="max-md:hidden">
                <img src={BurgerFlying} alt="" className="max-lg:w-44 max-lg:h-64 max-xl:w-56 max-xl:h-80 " />
            </div>
            <div className="max-md:w-full flex justify-between items-center md:gap-20 lg:gap-10 xl:gap-20 text-sm">
                <div className="flex flex-col gap-10">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-green-400 rounded-full"></div>
                        <span className="font-bold">Online Order</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-yellow-400 rounded-full"></div>
                        <span className="font-bold">24/7 Service</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-green-400 rounded-full"></div>
                        <span className="font-bold">Clean Kitchen</span>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-green-400 rounded-full"></div>
                        <span className="font-bold">Pre-Reservation</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-yellow-400 rounded-full"></div>
                        <span className="font-bold">Oraganized Foodie Place</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-green-400 rounded-full"></div>
                        <span className="font-bold">Super Chefs</span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default BannerSecondSection;