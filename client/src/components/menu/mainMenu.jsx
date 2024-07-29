import { Link, NavLink } from "react-router-dom";

const MainMenu = () => {
    return ( 
        <div className="w-full h-16 bg-green-600 hidden lg:flex items-center justify-around text-white sticky top-0 z-10">
            <div className="flex items-center gap-12 h-full ">
                <div className="flex items-center justify-between bg-green-700 h-full w-80 cursor-pointer px-4 group overflow-hidden hover:overflow-visible relative">
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M2 4.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5" clipRule="evenodd"></path></svg>
                        <span className="text-sm font-semibold">Shop By Department</span>
                    </div>
                    <div className="mt-10 group-hover:-mt-9 flex flex-col gap-4 transition-all ease-in-out duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4z"></path></svg>
                    </div>

                    <div className="absolute bg-gray-50 w-full right-0 left-0 top-20 group-hover:top-16 text-gray-400 p-3 hidden group-hover:block rounded-b transition-all ease-in-out duration-1000">
                        <ul className="bg-yellow-50 px-4 py-2 rounded">
                            <Link to={'/shop/pizza'}>
                                <li className="flex items-center gap-2 text-gray-500 hover:text-yellow-300 py-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M11.5 3a1 1 0 0 1 .993.883L12.5 4v7.19l6.94-1.892a1 1 0 0 1 1.227.702A9.5 9.5 0 1 1 11.5 3m-1 2.066A7.501 7.501 0 0 0 11.5 20a7.5 7.5 0 0 0 7.471-8.165l-.036-.326l-7.172 1.956a1 1 0 0 1-1.256-.85L10.5 12.5zm2 8.934a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m0 2a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m4.5-3a1 1 0 0 1 .993.883l.007.127a1 1 0 0 1-1.993.117L16 14a1 1 0 0 1 1-1m-9.5-1a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m7.794-9.956a9.52 9.52 0 0 1 5.149 3.869a1 1 0 0 1-.258 1.365l-.101.063l-5.608 3.038A1 1 0 0 1 13 9.473l.012-.125l1-6.5a1 1 0 0 1 1.282-.804M8 8a1 1 0 0 1 .993.883L9 9.01a1 1 0 0 1-1.993.117L7 9a1 1 0 0 1 1-1m7.798-3.612l-.503 3.273l2.807-1.521a7.5 7.5 0 0 0-2.304-1.752"></path></g></svg>
                                    <span className=" text-md">Pizza</span>
                                </li>
                            </Link>
                            <Link to={'/shop/burger'}>
                                <li className="flex items-center gap-2 text-gray-500 hover:text-yellow-300 py-3 border-y border-dotted">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><defs><mask id="ipTHamburgerOne0"><g fill="none"><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 22v-1c0-8.837-7.163-16-16-16S8 12.163 8 21v1m0 12s-2 5 2 7s24 2 28 0s2-7 2-7"></path><rect width="38" height="14" x="5" y="21" fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="7"></rect><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m11 29l1.592-.796A5.996 5.996 0 0 1 17.5 28l.424.17A4.979 4.979 0 0 0 22 28v0a4.979 4.979 0 0 1 4.076-.17l.96.384a4.71 4.71 0 0 0 3.857-.16v0a4.712 4.712 0 0 1 4.214 0L37 29"></path><circle cx="17" cy="15.05" r="2.5" fill="#fff"></circle><circle cx="23.75" cy="12.3" r="2.5" fill="#fff"></circle></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTHamburgerOne0)"></path></svg>
                                    <span className=" text-md">Burgers</span>
                                </li>
                            </Link>
                            <Link to={'/shop/cold-drink'}>
                                <li className="flex items-center gap-2 text-gray-500 hover:text-yellow-300 py-3 border-y border-dotted">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.06 192.06 0 0 1 768 64M656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64l129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928l304-404.928z"></path></svg>
                                    <span className=" text-md">Cold Drinks</span>
                                </li>
                            </Link>
                            <Link to={'/shop/hot-drink'}>
                                <li className="flex items-center gap-2 text-gray-500 hover:text-yellow-300 py-3 border-y border-dotted">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="currentColor" d="M212 76H32a12 12 0 0 0-12 12v48a100.24 100.24 0 0 0 26.73 68H32a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24h-14.73a100.8 100.8 0 0 0 20-32A44 44 0 0 0 256 128v-8a44.05 44.05 0 0 0-44-44m-16 60a76.27 76.27 0 0 1-42 68H86a76.27 76.27 0 0 1-42-68v-36h152Zm36-8a20 20 0 0 1-12.57 18.55A97 97 0 0 0 220 136v-34.32A20 20 0 0 1 232 120ZM68 48V24a12 12 0 0 1 24 0v24a12 12 0 0 1-24 0m40 0V24a12 12 0 0 1 24 0v24a12 12 0 0 1-24 0m40 0V24a12 12 0 0 1 24 0v24a12 12 0 0 1-24 0"></path></svg>
                                    <span className=" text-md">Hot Drinks</span>
                                </li>
                            </Link>
                            <Link to={'/shop/pasta'}>
                                <li className="flex items-center gap-2 text-gray-500 hover:text-yellow-300 py-3 border-y border-dotted">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><defs><mask id="ipTFrenchFries0"><g fill="none" stroke="#fff" stroke-width="4"><path stroke-linecap="round" stroke-linejoin="round" d="M21 22V12a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v9m21 0v-7a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v8m0 0V6a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v16"></path><path fill="#555" stroke-linecap="round" stroke-linejoin="round" d="M7 18s7 5 17 5s17-5 17-5l-4.818 26H11.818z"></path><ellipse cx="24" cy="33" fill="#555" rx="6" ry="3"></ellipse></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTFrenchFries0)"></path></svg>
                                    <span className=" text-md">Pasta</span>
                                </li>
                            </Link>
                            <Link to={'/shop/uncategorized'}>
                                <li className="flex items-center gap-2 text-gray-500 hover:text-yellow-300 py-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M1 21.98c0 .56.45 1.01 1.01 1.01H15c.56 0 1.01-.45 1.01-1.01V21H1z"></path><path fill="currentColor" d="M8.5 10.99c-1.42 0-3.77.46-4.88 2.01h9.77c-1.12-1.55-3.47-2.01-4.89-2.01" opacity=".3"></path><path fill="currentColor" d="M8.5 8.99C4.75 8.99 1 11 1 15h15c0-4-3.75-6.01-7.5-6.01M3.62 13c1.11-1.55 3.47-2.01 4.88-2.01s3.77.46 4.88 2.01zM1 17h15v2H1zM18 5V1h-2v4h-5l.23 2h9.56l-1.4 14H18v2h1.72c.84 0 1.53-.65 1.63-1.47L23 5z"></path></svg>
                                    <span className=" text-md">Uncategorized</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>

                <ul className="font-bold flex items-center gap-12">
                    <NavLink to={'/'}>
                        <li className="hover:text-yellow-400">Home</li>
                    </NavLink>
                    <NavLink to={'/menu'}>
                        <li className="hover:text-yellow-400">Menu</li>
                    </NavLink>
                    <NavLink to={'/about'}>
                        <li className="hover:text-yellow-400">About</li>
                    </NavLink>
                    <NavLink to={'/shop'}>
                        <li className="hover:text-yellow-400">Shop</li>
                    </NavLink>
                    <NavLink to={'/contact'}>
                        <li className="hover:text-yellow-400">Contact</li>
                    </NavLink>
                </ul>
            </div>
            
            <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9m8.95 8.95q.975.425 1.988.675T19 18.95v-2.2l-2.35-.475zm0 0"></path></svg>
                    <span className="text-xs">24/7 Support center</span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="text-xl font-bold text-yellow-400">+94 123-456-789</span>
                </div>
            </div>
        </div>
     );
}
 
export default MainMenu;