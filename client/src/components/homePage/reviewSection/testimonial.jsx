const Testimonial = () => {
    return ( 
        <div className="max-w-sm">
            <h3 className="font-curve text-4xl text-yellow-400">Testimonials</h3>
            <h1 className="text-4xl font-bold my-2">What our customer say about us</h1>
            <p className="my-6 text-gray-400">We provide you with complete meal prep which includes the prepackaged necessary ingredients for a divine dinner as well as an easy to follow recipe guide in beautifull.</p>
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl text-green-600 font-bold">15k+</h1>
                    <h3 className="font-bold">Happy Customers</h3>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl text-green-600 font-bold">17+</h1>
                    <h3 className="font-bold">Award Win</h3>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl text-green-600 font-bold">50+</h1>
                    <h3 className="font-bold">Food Menu</h3>
                </div>
            </div>
        </div>
     );
}
 
export default Testimonial;