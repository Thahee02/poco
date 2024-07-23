import { NavLink } from "react-router-dom";

const MainMenu = () => {
    return ( 
        <div className="w-full h-16 bg-green-600 hidden lg:flex items-center justify-around text-white overflow-hidden">
            <div className="flex items-center gap-8 h-full ">
                <div className="flex items-center justify-between bg-green-700 h-full w-80 cursor-pointer px-4 group">
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em" viewBox="0 0 15 15"><path fill="currentColor" fillRule="evenodd" d="M2 4.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5" clipRule="evenodd"></path></svg>
                        <span className="text-sm font-semibold">Shop By Department</span>
                    </div>
                    <div className="mt-10 group-hover:-mt-9 flex flex-col gap-4 transition-all ease-in-out duration-300 hov">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4z"></path></svg>
                    </div>
                </div>

                <ul className="font-bold flex items-center gap-10">
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