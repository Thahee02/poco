
import BannerSection from '../components/homePage/banner';
import BannerSecondSection from '../components/homePage/banner2';
import BannerThirdSection from '../components/homePage/banner3';
import LatestItemsSection from '../components/homePage/latestFoods';
import MostSellFoodsSection from '../components/homePage/mostSellFoods';
import ProductCategorySection from '../components/homePage/productCategory';
const HomePage = () => {
    return ( 
        <>
            <BannerSection />
            <ProductCategorySection />
            <LatestItemsSection />
            <BannerSecondSection />
            <MostSellFoodsSection />
            <BannerThirdSection />
        </>
     );
}
 
export default HomePage;