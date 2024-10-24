const FooterSection = () => {
    return ( 
        <div className="bg-zinc-900 pt-16 pb-8 text-white flex justify-around">
            <div>
                <h3 className="font-bold mb-5">INFORMATION</h3>
                <ul className="text-gray-400">
                    <li className="hover:text-yellow-400 cursor-pointer transition-all ease-in-out duration-750">Privacy Policy</li>
                    <li className="hover:text-yellow-400 cursor-pointer transition-all ease-in-out duration-750">Refund Policy</li>
                    <li className="hover:text-yellow-400 cursor-pointer transition-all ease-in-out duration-750">Shipping & Return</li>
                    <li className="hover:text-yellow-400 cursor-pointer transition-all ease-in-out duration-750">Term Of Use</li>
                </ul>
            </div>
            <div>
                <h3 className="font-bold mb-5">QUICK LINKS</h3>
                <ul className="text-gray-400">
                    <li className="hover:text-yellow-400 cursor-pointer transition-all ease-in-out duration-750">My account</li>
                    <li className="hover:text-yellow-400 cursor-pointer transition-all ease-in-out duration-750">Cart</li>
                    <li className="hover:text-yellow-400 cursor-pointer transition-all ease-in-out duration-750">Wishlist</li>
                    <li className="hover:text-yellow-400 cursor-pointer transition-all ease-in-out duration-750">Checkout</li>
                </ul>
            </div>
            <div>
                <h3 className="font-bold mb-5">CONTACT US</h3>
                <p className="text-gray-400">Find a location nearest you.</p>
            </div>
        </div>
     );
}
 
export default FooterSection;