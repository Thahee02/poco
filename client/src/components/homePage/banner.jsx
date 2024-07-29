import HomePageBanner1 from '../../assets/home-page-banner1.jpg'
import { Link } from "react-router-dom";
const BannerSection = () => {
    return ( 
        <div className="w-full h-screen overflow-hidden bg-no-repeat max-xl:bg-center bg-cover flex items-center justify-center md:justify-end md:pr-12 xl:pr-20 font-roboto" style={{backgroundImage: 'url('+ HomePageBanner1 +')'}}>
            <div className='flex flex-col gap-5 text-center md:text-right'>
                <h3 className='text-4xl md:text-5xl text-yellow-500 font-bold drop-shadow-2xl font-curve flex items-center gap-2 justify-center md:justify-end '>
                    <span>Best Quality</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="M24 44c9.941 0 18-8.059 18-18S33.941 8 24 8S6 16.059 6 26s8.059 18 18 18Z"></path><path stroke-linecap="round" d="M24 8c-.25-1-2-4-6-4m6 4c.083-1 .6-3.2 2-4m5 29s-2 4-7 4s-7-4-7-4"></path><path stroke-linecap="round" d="M31 33s1.5-4-1-4s-3 7-3 7m6-15h-4m-12-2v4M4 24v4m40-4v4"></path></g></svg>
                </h3>
                <h1 className='text-6xl lg:text-7xl text-gray-800 font-extrabold drop-shadow-2xl'>OPTIONS OF</h1>
                <h2 className='text-4xl lg:text-5xl text-green-500 font-extrabold drop-shadow-2xl'>THE DAY IN YOUR TOWN</h2>
                <Link to={'/shop'}>
                    <button className='bg-yellow-400 hover:bg-white text-gray-800 px-6 py-4 md:px-8 md:py-4 lg:px-12 lg:py-4 rounded-lg font-semibold transition-all ease-in-out duration-300'>ORDER NOW</button>
                </Link>
            </div>
        </div>
     );
}
 
export default BannerSection;