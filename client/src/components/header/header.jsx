import { Link } from 'react-router-dom';
import logo from '../../assets/poco logo.svg'

const Header = () => {

    const categories = [
        {
            id: 1,
            name: 'All category',
            value: 'all'
        },
        {
            id: 2,
            name: 'Burgers',
            value: 'burger'
        },
        {
            id: 3,
            name: 'Cold Drinks',
            value: 'cold-drinks'
        },
        {
            id: 4,
            name: 'Hot Drinks',
            value: 'hot-drinks'
        },
        {
            id: 5,
            name: 'Pasta',
            value: 'pasta'
        },
        {
            id: 6,
            name: 'Pizza',
            value: 'pizza'
        }
    ]

    return ( 
        <div className="flex items-center justify-between lg:justify-evenly max-sm:px-2 max-md:px-4 max-lg:px-10 py-6 lg:py-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15" className='lg:hidden hover:text-yellow-400 cursor-pointer'><path fill="currentColor" fillRule="evenodd" d="M15 4H0V3h15zM6 8H0V7h6zm3 4H0v-1h9z" clipRule="evenodd"></path></svg>
            <Link to={'/'}><img src={logo} alt="Poco logo" className='w-32' /></Link>
            <div className='hidden lg:flex -gap-1 relative '>
                <select name="selectCategory" id="selectCategory" className='py-3 pl-4 border w-52 rounded-l-full text-sm font-semibold bg-yellow-400 outline-none cursor-pointer transition ease-in-out duration-700'>
                    {categories.map(category => <option key={category.id} value={category.value} className='bg-white hover:text-yellow-400'>{category.name}</option>)}
                </select>
                <input type="text" name='searchBox' id='searchBox' className='py-3 pl-4 pr-12 border-2 border-yellow-400 lg:w-[400px] xl:w-[500px] rounded-r-full text-xs outline-none' placeholder='Search products...' />
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" className='absolute right-4 top-1/4 cursor-pointer hover:text-yellow-400'><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"></path></svg>
            </div>
            <div className='lg:hidden'>
                <a href="tel:+94123456789"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" className='-rotate-90 hover:text-yellow-400 cursor-pointer'><path fill="currentColor" d="M16 11V8h-3V6h3V3h2v3h3v2h-3v3zm3.95 10q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"></path></svg></a>
            </div>

            <div className='hidden lg:flex items-center gap-3'>
                <Link to={'/login'}>
                    <div className='w-12 h-12 border rounded-full flex justify-center items-center hover:bg-yellow-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"></path></svg>                   
                    </div>
                </Link>
                <Link to={'/whishlist'}>
                    <div className='w-12 h-12 border rounded-full flex justify-center items-center hover:bg-yellow-400 relative'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 19.654l-.758-.685q-2.448-2.236-4.05-3.828q-1.601-1.593-2.528-2.81t-1.296-2.2T3 8.15q0-1.908 1.296-3.204T7.5 3.65q1.32 0 2.475.675T12 6.289Q12.87 5 14.025 4.325T16.5 3.65q1.908 0 3.204 1.296T21 8.15q0 .996-.368 1.98q-.369.986-1.296 2.202t-2.519 2.809q-1.592 1.592-4.06 3.828z"></path></svg>
                        <span className='absolute -top-1 right-0 bg-orange-500 text-xs text-white px-1.5 rounded-full'>0</span>
                    </div>
                </Link>
                <Link to={'/cart'}>
                    <div className='w-12 h-12 border rounded-full flex justify-center items-center hover:bg-yellow-400 relative'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.044 20q-.54 0-.978-.316q-.439-.317-.581-.851L2.28 11.025q-.106-.379.134-.702q.239-.323.643-.323H7.75l3.862-5.82q.067-.103.176-.16q.11-.059.225-.059q.116 0 .225.058q.11.058.177.162L16.238 10h4.704q.404 0 .653.323q.25.323.124.702l-2.242 7.808q-.143.534-.58.85q-.44.317-.98.317zM12 16q.402 0 .701-.299T13 15t-.299-.701T12 14t-.701.299T11 15t.299.701T12 16m-3.036-6h6.067l-3.037-4.623z"></path></svg>
                        <span className='absolute -top-1 right-0 bg-orange-500 text-xs text-white px-1.5 rounded-full'>0</span>
                    </div>
                </Link>
            </div>
        </div>
     );
}
 
export default Header;