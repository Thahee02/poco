import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Drink from '../../assets/drink.png'
import { Link } from "react-router-dom";

const MostSellFoodsSection = () => {

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
        <div className='max-sm:px-2 max-md:px-16 xl:mx-14 py-10'>
            <h1 className='text-5xl font-bold pl-4 mb-10 max-lg:text-center'>Most Sell Dishes</h1>
            <Carousel responsive={responsive} infinite={true}  centerMode={false} autoPlay={true} autoPlaySpeed={7500} transitionDuration={1000} className='max-sm:px-20 max-md:px-24 max-lg:px-10 lg:px-4 xl:px-8 '>
                <Link to={'/shop/#'} className='cursor-default'>
                    <div className='w-72 h-[475px] border-2 rounded-3xl px-3 text-white flex flex-col items-center gap-5 font-roboto cursor-pointer relative group'>
                        <div className='absolute top-16 w-64 h-[200px] bg-yellow-100 group-hover:bg-yellow-400 rounded-2xl origin-bottom scale-y-50 group-hover:scale-y-125 -z-10 transition-all ease-in-out duration-300'>
                            
                        </div>
                        <div className='w-full h-[275px] flex items-center justify-center '>
                            <img src={Drink} alt="" className='w-48 h-48 group-hover:w-56 group-hover:h-56 transition-all ease-in-out duration-300' />
                        </div>
                        
                        <div className='self-start px-2'>
                            <div className='text-yellow-400 flex '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75M12 15.4V6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"></path></svg>
                            </div>
                            <h3 className='text-black hover:text-yellow-500 text-lg font-bold mt-2 pl-0.5'>Mix Fruit</h3>
                            <div className='h-8 text-ellipsis overflow-hidden ...'>
                                <p className='text-gray-400 text-xs pl-0.5'>Mixed fruit typically refers to a combination of various types of fruits, either fresh, dried, or canned, that are blended together. This mix can include fruits like apples, bananas, grapes, berries, citrus, and tropical varieties</p>
                            </div>
                            <div className='mt-3 flex items-center justify-between'>
                                <h5 className='text-yellow-400 font-semibold text-xl'>$16.93</h5>
                                <button className='flex items-center gap-2 text-gray-800 font-semibold px-4 py-3 bg-yellow-400 hover:text-white rounded'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m4.833 20l-2.85-10H7.75l4.264-6.429L16.239 10h5.778L19.13 20zm.667-1h13l2.2-8H3.3zm6.5-3q.402 0 .701-.299T13 15t-.299-.701T12 14t-.701.299T11 15t.299.701T12 16m-3.036-6h6.067l-3.037-4.623zM12 15"></path></svg>
                                    <span className='text-sm'>ADD TO CARD</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={'/shop/#'} className='cursor-default'>
                    <div className='w-72 h-[475px] border-2 rounded-3xl px-3 text-white flex flex-col items-center gap-5 font-roboto cursor-pointer relative group'>
                        <div className='absolute top-16 w-64 h-[200px] bg-yellow-100 group-hover:bg-yellow-400 rounded-2xl origin-bottom scale-y-50 group-hover:scale-y-125 -z-10 transition-all ease-in-out duration-300'>
                            
                        </div>
                        <div className='w-full h-[275px] flex items-center justify-center '>
                            <img src={Drink} alt="" className='w-48 h-48 group-hover:w-56 group-hover:h-56 transition-all ease-in-out duration-300' />
                        </div>
                        
                        <div className='self-start px-2'>
                            <div className='text-yellow-400 flex '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75M12 15.4V6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"></path></svg>
                            </div>
                            <h3 className='text-black hover:text-yellow-500 text-lg font-bold mt-2 pl-0.5'>Mix Fruit</h3>
                            <div className='h-8 text-ellipsis overflow-hidden ...'>
                                <p className='text-gray-400 text-xs pl-0.5'>Mixed fruit typically refers to a combination of various types of fruits, either fresh, dried, or canned, that are blended together. This mix can include fruits like apples, bananas, grapes, berries, citrus, and tropical varieties</p>
                            </div>
                            <div className='mt-3 flex items-center justify-between'>
                                <h5 className='text-yellow-400 font-semibold text-xl'>$16.93</h5>
                                <button className='flex items-center gap-2 text-gray-800 font-semibold px-4 py-3 bg-yellow-400 hover:text-white rounded'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m4.833 20l-2.85-10H7.75l4.264-6.429L16.239 10h5.778L19.13 20zm.667-1h13l2.2-8H3.3zm6.5-3q.402 0 .701-.299T13 15t-.299-.701T12 14t-.701.299T11 15t.299.701T12 16m-3.036-6h6.067l-3.037-4.623zM12 15"></path></svg>
                                    <span className='text-sm'>ADD TO CARD</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={'/shop/#'} className='cursor-default'>
                    <div className='w-72 h-[475px] border-2 rounded-3xl px-3 text-white flex flex-col items-center gap-5 font-roboto cursor-pointer relative group'>
                        <div className='absolute top-16 w-64 h-[200px] bg-yellow-100 group-hover:bg-yellow-400 rounded-2xl origin-bottom scale-y-50 group-hover:scale-y-125 -z-10 transition-all ease-in-out duration-300'>
                            
                        </div>
                        <div className='w-full h-[275px] flex items-center justify-center '>
                            <img src={Drink} alt="" className='w-48 h-48 group-hover:w-56 group-hover:h-56 transition-all ease-in-out duration-300' />
                        </div>
                        
                        <div className='self-start px-2'>
                            <div className='text-yellow-400 flex '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75M12 15.4V6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"></path></svg>
                            </div>
                            <h3 className='text-black hover:text-yellow-500 text-lg font-bold mt-2 pl-0.5'>Mix Fruit</h3>
                            <div className='h-8 text-ellipsis overflow-hidden ...'>
                                <p className='text-gray-400 text-xs pl-0.5'>Mixed fruit typically refers to a combination of various types of fruits, either fresh, dried, or canned, that are blended together. This mix can include fruits like apples, bananas, grapes, berries, citrus, and tropical varieties</p>
                            </div>
                            <div className='mt-3 flex items-center justify-between'>
                                <h5 className='text-yellow-400 font-semibold text-xl'>$16.93</h5>
                                <button className='flex items-center gap-2 text-gray-800 font-semibold px-4 py-3 bg-yellow-400 hover:text-white rounded'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m4.833 20l-2.85-10H7.75l4.264-6.429L16.239 10h5.778L19.13 20zm.667-1h13l2.2-8H3.3zm6.5-3q.402 0 .701-.299T13 15t-.299-.701T12 14t-.701.299T11 15t.299.701T12 16m-3.036-6h6.067l-3.037-4.623zM12 15"></path></svg>
                                    <span className='text-sm'>ADD TO CARD</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={'/shop/#'} className='cursor-default'>
                    <div className='w-72 h-[475px] border-2 rounded-3xl px-3 text-white flex flex-col items-center gap-5 font-roboto cursor-pointer relative group'>
                        <div className='absolute top-16 w-64 h-[200px] bg-yellow-100 group-hover:bg-yellow-400 rounded-2xl origin-bottom scale-y-50 group-hover:scale-y-125 -z-10 transition-all ease-in-out duration-300'>
                            
                        </div>
                        <div className='w-full h-[275px] flex items-center justify-center '>
                            <img src={Drink} alt="" className='w-48 h-48 group-hover:w-56 group-hover:h-56 transition-all ease-in-out duration-300' />
                        </div>
                        
                        <div className='self-start px-2'>
                            <div className='text-yellow-400 flex '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75M12 15.4V6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"></path></svg>
                            </div>
                            <h3 className='text-black hover:text-yellow-500 text-lg font-bold mt-2 pl-0.5'>Mix Fruit</h3>
                            <div className='h-8 text-ellipsis overflow-hidden ...'>
                                <p className='text-gray-400 text-xs pl-0.5'>Mixed fruit typically refers to a combination of various types of fruits, either fresh, dried, or canned, that are blended together. This mix can include fruits like apples, bananas, grapes, berries, citrus, and tropical varieties</p>
                            </div>
                            <div className='mt-3 flex items-center justify-between'>
                                <h5 className='text-yellow-400 font-semibold text-xl'>$16.93</h5>
                                <button className='flex items-center gap-2 text-gray-800 font-semibold px-4 py-3 bg-yellow-400 hover:text-white rounded'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m4.833 20l-2.85-10H7.75l4.264-6.429L16.239 10h5.778L19.13 20zm.667-1h13l2.2-8H3.3zm6.5-3q.402 0 .701-.299T13 15t-.299-.701T12 14t-.701.299T11 15t.299.701T12 16m-3.036-6h6.067l-3.037-4.623zM12 15"></path></svg>
                                    <span className='text-sm'>ADD TO CARD</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={'/shop/#'} className='cursor-default'>
                    <div className='w-72 h-[475px] border-2 rounded-3xl px-3 text-white flex flex-col items-center gap-5 font-roboto cursor-pointer relative group'>
                        <div className='absolute top-16 w-64 h-[200px] bg-yellow-100 group-hover:bg-yellow-400 rounded-2xl origin-bottom scale-y-50 group-hover:scale-y-125 -z-10 transition-all ease-in-out duration-300'>
                            
                        </div>
                        <div className='w-full h-[275px] flex items-center justify-center '>
                            <img src={Drink} alt="" className='w-48 h-48 group-hover:w-56 group-hover:h-56 transition-all ease-in-out duration-300' />
                        </div>
                        
                        <div className='self-start px-2'>
                            <div className='text-yellow-400 flex '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75M12 15.4V6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"></path></svg>
                            </div>
                            <h3 className='text-black hover:text-yellow-500 text-lg font-bold mt-2 pl-0.5'>Mix Fruit</h3>
                            <div className='h-8 text-ellipsis overflow-hidden ...'>
                                <p className='text-gray-400 text-xs pl-0.5'>Mixed fruit typically refers to a combination of various types of fruits, either fresh, dried, or canned, that are blended together. This mix can include fruits like apples, bananas, grapes, berries, citrus, and tropical varieties</p>
                            </div>
                            <div className='mt-3 flex items-center justify-between'>
                                <h5 className='text-yellow-400 font-semibold text-xl'>$16.93</h5>
                                <button className='flex items-center gap-2 text-gray-800 font-semibold px-4 py-3 bg-yellow-400 hover:text-white rounded'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m4.833 20l-2.85-10H7.75l4.264-6.429L16.239 10h5.778L19.13 20zm.667-1h13l2.2-8H3.3zm6.5-3q.402 0 .701-.299T13 15t-.299-.701T12 14t-.701.299T11 15t.299.701T12 16m-3.036-6h6.067l-3.037-4.623zM12 15"></path></svg>
                                    <span className='text-sm'>ADD TO CARD</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>
            </Carousel>
        </div>
     );
}
 
export default MostSellFoodsSection;