import HomePageBanner3 from '../../assets/home-page-banner-3.jpg'
import leafLeftImage from '../../assets/leaf-left.png'
import leafRightImage from '../../assets/leaf-right.png'
import React, {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 

const BannerThirdSection = () => {

    const [value, setValue] = useState({ 
        startDate: null,
        endDate: null 
    }); 

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue); 
        setValue(newValue); 
    } 
    
    return ( 
        <div className="w-full  my-20 py-16 lg:py-10 flex max-md:flex-col px-4 items-center justify-around max-lg:gap-10  text-white bg-cover bg-bottom" style={{backgroundImage: 'url('+ HomePageBanner3 +')'}}>
            <div className="flex-wrap w-full lg:w-4/12 xl:w-3/12 max-md:text-center">
                <h1 className="text-4xl font-bold">Do you have any dinner plan today? Reserve your table</h1>
                <p className="py-8 text-sm max-md:px-16">Make online reservations, read restaurant reviews from dinners, and earn points towards free meals. OpenTable is a real time online reservation.</p>
                <div className='flex max-md:flex-col items-center gap-5 max-md:justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3.5em" viewBox="0 0 24 24" className='p-2.5 bg-green-600 hover:bg-yellow-400 rounded-full transition-all ease-in-out duration-300'><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9m8.95 8.95q.975.425 1.988.675T19 18.95v-2.2l-2.35-.475zm0 0"></path></svg>
                    <div className=''>
                        <h6 className='text-sm font-bold'>Quick order 24/7</h6>
                        <h3 className="text-3xl font-bold text-yellow-400">+94 123-456-789</h3>
                    </div>
                </div>
            </div>

            <div className='max-sm:w-full md:w-6/12 lg:w-5/12 xl:w-4/12 px-20 py-8 rounded-3xl bg-green-600 flex flex-col items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="4.5em" height="4.5em" viewBox="0 0 24 24" className='text-yellow-400'><path fill="currentColor" d="m14.268 12.147l-.853.853l7.07 7.071l-1.413 1.414L12 14.415l-7.072 7.07l-1.414-1.414l9.339-9.339c-.588-1.457.02-3.555 1.621-5.156c1.953-1.953 4.644-2.428 6.01-1.061c1.368 1.367.893 4.058-1.06 6.01c-1.602 1.602-3.7 2.21-5.157 1.622M4.222 3.807l6.718 6.718l-2.829 2.829l-3.889-3.89a4 4 0 0 1 0-5.656m13.789 5.304c1.257-1.257 1.516-2.726 1.06-3.182s-1.924-.196-3.181 1.06c-1.258 1.258-1.517 2.727-1.061 3.183s1.925.196 3.182-1.06"></path></svg>
                <h1 className='text-6xl font-curve font-bold py-3'>Reservation</h1>
                <div className='flex items-center gap-3'>
                    <img src={leafLeftImage} alt="" />
                    <h6 className='font-bold'>Book Your Table</h6>
                    <img src={leafRightImage} alt="" className='' />
                </div>
                <form action="" className='w-full my-12 flex flex-col gap-5'>
                    <select name="" id="" className='w-full bg-transparent px-4 py-3 border border-gray-300 rounded focus:border-yellow-400 outline-none'>
                        <option value="onePeople" className='text-gray-500'>1 People</option>
                        <option value="twoPeople" className='text-gray-500'>2 People</option>
                        <option value="threePeople" className='text-gray-500'>3 People</option>
                        <option value="fourPeople" className='text-gray-500'>4 People</option>
                    </select>
                    <Datepicker 
                        asSingle={true} 
                        useRange={false} 
                        minDate={new Date()}
                        value={value} 
                        onChange={handleValueChange}
                        inputClassName="w-full bg-transparent px-4 py-3 border border-gray-300 rounded focus:border-yellow-400 outline-none text-white" 
                    />
                    <input type="time" className='w-full bg-transparent px-4 py-3 border border-gray-300 rounded focus:border-yellow-400 outline-none'/>
                    <input type="submit" value={'Book A Table'} className='w-full bg-yellow-400 text-black font-bold px-4 py-4  rounded-xl hover:text-white outline-none transition-all ease-in-out duration-300 cursor-pointer'/>
                </form>
            </div>
    
        </div>
     );
}
 
export default BannerThirdSection;