import HomePageBanner4 from '../../assets/home-page-banner-4.jpg'
import MobileScreenshot1 from '../../assets/mobile-screenshot1.png'
import MobileScreenshot2 from '../../assets/mobile-screenshot2.png'
import PlaystoreLogo from '../../assets/playstore-logo.png'

const BannerFourthSection = () => {
    return ( 
        <div className="w-full my-8 pt-16 lg:pt-10 flex max-lg:flex-col-reverse px-4 lg:items-center lg:justify-around max-lg:gap-10  text-white bg-cover bg-bottom overflow-hidden" style={{backgroundImage: 'url('+ HomePageBanner4 +')'}}>
            <div className='flex max-sm:-ml-36 lg:-ml-36 -mb-24'>
                <img src={MobileScreenshot1} alt="" />
                <img src={MobileScreenshot2} alt="" className='-ml-48' />
            </div>
            <div>
                <h1 className='text-5xl font-bold'>Never feel hungry! <br /> Dowload our mobile app <br /> enjoy delicious foods</h1>
                <div className='mt-12 flex flex-col gap-5'>
                    <div className='flex items-center gap-3'>
                        <div className='w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-black'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="M2 7v-.5a.5.5 0 0 0-.5.5zm11 0h.5a.5.5 0 0 0-.5-.5zm0 2v-.5a.5.5 0 0 0-.5.5zM2 7.5h11v-1H2zM12.5 7v12h1V7zm-10 10V7h-1v10zM13 9.5h5v-1h-5zm8.5 3.5v4h1v-4zm-8 6V9h-1v10zm5.56 1.06a1.5 1.5 0 0 1-2.12 0l-.708.708a2.5 2.5 0 0 0 3.536 0zm-2.12-2.12a1.5 1.5 0 0 1 2.12 0l.708-.708a2.5 2.5 0 0 0-3.536 0zm-9.88 2.12a1.5 1.5 0 0 1-2.12 0l-.708.708a2.5 2.5 0 0 0 3.536 0zm-2.12-2.12a1.5 1.5 0 0 1 2.12 0l.708-.708a2.5 2.5 0 0 0-3.536 0zm14.12 0c.294.292.44.675.44 1.06h1c0-.639-.244-1.28-.732-1.768zM19.5 19c0 .385-.146.768-.44 1.06l.708.708A2.5 2.5 0 0 0 20.5 19zm-3.5-.5h-3v1h3zm.94 1.56A1.5 1.5 0 0 1 16.5 19h-1c0 .639.244 1.28.732 1.768zM16.5 19c0-.385.146-.768.44-1.06l-.708-.708A2.5 2.5 0 0 0 15.5 19zM4.94 20.06A1.5 1.5 0 0 1 4.5 19h-1c0 .639.244 1.28.732 1.768zM4.5 19c0-.385.146-.768.44-1.06l-.708-.708A2.5 2.5 0 0 0 3.5 19zm8.5-.5H8v1h5zm-5.94-.56c.294.292.44.675.44 1.06h1c0-.639-.244-1.28-.732-1.768zM7.5 19c0 .385-.146.768-.44 1.06l.708.708A2.5 2.5 0 0 0 8.5 19zm14-2a1.5 1.5 0 0 1-1.5 1.5v1a2.5 2.5 0 0 0 2.5-2.5zM18 9.5a3.5 3.5 0 0 1 3.5 3.5h1A4.5 4.5 0 0 0 18 8.5zM1.5 17A2.5 2.5 0 0 0 4 19.5v-1A1.5 1.5 0 0 1 2.5 17z"></path><path stroke="currentColor" stroke-linejoin="round" d="M3.5 4a1 1 0 0 1 1-1a3 3 0 0 1 3 3v1h-1a3 3 0 0 1-3-3Zm8 0a1 1 0 0 0-1-1a3 3 0 0 0-3 3v1h1a3 3 0 0 0 3-3Z"></path></g></svg>
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Special Promo</h3>
                            <p>Sign up for updates & get free shipping</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-black'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="20" d="M322 416c0 35.35-20.65 64-56 64H134c-35.35 0-56-28.65-56-64m258-80c17.67 0 32 17.91 32 40h0c0 22.09-14.33 40-32 40H64c-17.67 0-32-17.91-32-40h0c0-22.09 14.33-40 32-40"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="20" d="M344 336H179.31a8 8 0 0 0-5.65 2.34l-26.83 26.83a4 4 0 0 1-5.66 0l-26.83-26.83a8 8 0 0 0-5.65-2.34H56a24 24 0 0 1-24-24h0a24 24 0 0 1 24-24h288a24 24 0 0 1 24 24h0a24 24 0 0 1-24 24ZM64 276v-.22c0-55 45-83.78 100-83.78h72c55 0 100 29 100 84v-.22M241 112l7.44 63.97"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="20" d="M256 480h139.31a32 32 0 0 0 31.91-29.61L463 112"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20" d="m368 112l16-64l47-16"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="20" d="M224 112h256"></path></svg>
                        </div>
                        <div>
                            <h3 className='font-bold text-lg'>Fast Delivery</h3>
                            <p>We deliver goods around the world</p>
                        </div>
                    </div>
                </div>
                <div className="my-6 flex flex-col gap-2">
                    <p>From App Store or Google Play:</p>
                    <img src={PlaystoreLogo} alt="" className='w-48' />
                </div>
            </div>   
        </div>
     );
}
 
export default BannerFourthSection;