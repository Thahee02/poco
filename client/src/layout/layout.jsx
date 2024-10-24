import { Outlet } from 'react-router-dom';
import Header from '../components/header/header';
import MainMenu from '../components/menu/mainMenu';
import Strip from '../components/strip/strip';
import '../index.css'
import FooterSection from '../components/footer/footer';

const LayoutPage = () => {
    return ( 
        <>
            <Strip />
            <Header />
            <MainMenu />
            <Outlet />
            <FooterSection />
        </>
     );
}
 
export default LayoutPage;