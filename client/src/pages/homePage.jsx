
import BannerSection from '../components/homePage/banner';
import LatestItemsSection from '../components/homePage/latestFoods';
import ProductCategorySection from '../components/homePage/productCategory';
const HomePage = () => {
    return ( 
        <>
            <BannerSection />
            <ProductCategorySection />
            <LatestItemsSection />
        </>
     );
}
 
export default HomePage;