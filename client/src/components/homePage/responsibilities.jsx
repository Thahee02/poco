const ResponsibilitiesSection = () => {
    return ( 
        <div className="bg-green-600 py-10 lg:px-8 flex max-lg:flex-col max-lg:items-center max-lg:text-center justify-around max-lg:gap-10">
            <div className="flex flex-col gap-3">
                <div className="flex max-lg:flex-col items-center lg:gap-3 max-lg:justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 14 14" className="text-yellow-400"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 5.5h-3a2 2 0 0 0-2 2v4H2m10.5 0h1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5.68M6 11.5h2.5"></path><circle cx="4" cy="11.5" r="2"></circle><circle cx="10.5" cy="11.5" r="2"></circle></g></svg>
                    <h3 className="text-white font-bold text-lg">Free Shipping</h3>
                </div>
                <p className="text-white font-thin">Sign up for updates and get free shipping</p>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex max-lg:flex-col items-center lg:gap-3 max-lg:justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 14 14" className="text-yellow-400"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 3h0a6.5 6.5 0 0 1 6.5 6.5v0a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v0A6.5 6.5 0 0 1 7 3Zm0 0V1.5m-6.5 11h13"></path></svg>
                    <h3 className="text-white font-bold text-lg">Fast Delivery</h3>
                </div>
                <p className="text-white font-thin">We deliver goods around the world</p>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex max-lg:flex-col items-center lg:gap-3 max-lg:justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24" className="text-yellow-400"><path fill="currentColor" d="M1 21.98c0 .56.45 1.01 1.01 1.01H15c.56 0 1.01-.45 1.01-1.01V21H1zM8.5 8.99C4.75 8.99 1 11 1 15h15c0-4-3.75-6.01-7.5-6.01M3.62 13c1.11-1.55 3.47-2.01 4.88-2.01s3.77.46 4.88 2.01zM1 17h15v2H1zM18 5V1h-2v4h-5l.23 2h9.56l-1.4 14H18v2h1.72c.84 0 1.53-.65 1.63-1.47L23 5z"></path></svg>
                    <h3 className="text-white font-bold text-lg">Best Quality</h3>
                </div>
                <p className="text-white font-thin">We are international chain of restaurants.</p>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex max-lg:flex-col items-center lg:gap-3 max-lg:justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 256 256" className="text-yellow-400"><path fill="currentColor" d="M236 96a12 12 0 0 0-.44-3.3L221.2 42.51A20.08 20.08 0 0 0 202 28H54a20.08 20.08 0 0 0-19.2 14.51L20.46 92.7A12 12 0 0 0 20 96v16a43.94 43.94 0 0 0 16 33.92V216a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-70.08A43.94 43.94 0 0 0 236 112zM57.05 52H199l9.14 32H47.91Zm91 56v4a20 20 0 0 1-40 0v-4ZM53 128.71A20 20 0 0 1 44 112v-4h40v4a20 20 0 0 1-20 20a19.76 19.76 0 0 1-9.07-2.2a11.5 11.5 0 0 0-1.93-1.09M196 204H60v-48.19c1.32.12 2.65.19 4 .19a43.86 43.86 0 0 0 32-13.85a43.89 43.89 0 0 0 64 0A43.86 43.86 0 0 0 192 156c1.35 0 2.68-.07 4-.19Zm16-92a20 20 0 0 1-9 16.71a11.7 11.7 0 0 0-1.88 1.09A20 20 0 0 1 172 112v-4h40Z"></path></svg>
                    <h3 className="text-white font-bold text-lg">Our Store</h3>
                </div>
                <p className="text-white font-thin">You can see our “here and now” products</p>
            </div>
        </div>
     );
}
 
export default ResponsibilitiesSection;