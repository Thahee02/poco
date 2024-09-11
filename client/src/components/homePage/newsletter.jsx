import VegitablesImage from '../../assets/vegitables.png'
import PizzaImage from '../../assets/pizza-newsletter.png'

const NewsLetterSection = () => {
    return ( 
        <div className='flex max-lg:flex-col items-center justify-around max-lg:relative'>
            <img src={VegitablesImage} alt="" className='max-lg:absolute max-lg:top-0 max-lg:-z-10 max-lg:left max-lg:opacity-25' />
            <div className='flex flex-col items-center gap-3'>
                <h3 className="font-curve text-4xl text-green-600 font-bold">Newsletter</h3>
                <h1 className='text-4xl font-bold'>Get <span className='text-yellow-400'>10%</span> off your order!</h1>
                <p className='text-gray-500'>Enter your email and receive a 10% discount on your next order!</p>
                <form action="#" className='my-5 relative'>
                    <input type="text" name="newsLetter" id="newsLetter" className='w-[600px] max-sm:w-[450px] border border-gray-300 rounded py-3.5 pl-5 outline-none' placeholder='Enter your email...' />
                    <button type='submit' className='absolute top-1 right-1 flex items-center gap-2 text-gray-800 font-semibold px-4 py-3 bg-yellow-400 hover:bg-yellow-500 rounded'>
                        <span className='text-sm font-bold'>SUBSCRIBE</span>
                    </button>
                </form>
            </div>
            <img src={PizzaImage} alt="" className='max-xl:hidden' />
        </div>
     );
}
 
export default NewsLetterSection;