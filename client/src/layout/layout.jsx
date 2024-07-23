import Header from '../components/header/header';
import MainMenu from '../components/menu/mainMenu';
import Strip from '../components/strip/strip';
import '../index.css'

const LayoutPage = () => {
    return ( 
        <>
            <Strip />
            <Header />
            <MainMenu />
        </>
     );
}
 
export default LayoutPage;