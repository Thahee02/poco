
import BannerSection from '../components/homePage/banner';
import BannerSecondSection from '../components/homePage/banner2';
import LatestItemsSection from '../components/homePage/latestFoods';
import ProductCategorySection from '../components/homePage/productCategory';
const HomePage = () => {
    return ( 
        <>
            <BannerSection />
            <ProductCategorySection />
            <LatestItemsSection />
            <BannerSecondSection />
        </>
     );
}
 
export default HomePage;