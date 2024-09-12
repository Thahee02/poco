
import BannerSection from '../components/homePage/banner';
import BannerSecondSection from '../components/homePage/banner2';
import BannerThirdSection from '../components/homePage/banner3';
import BannerFourthSection from '../components/homePage/banner4';
import ChefsSection from '../components/homePage/chefs';
import LatestItemsSection from '../components/homePage/latestFoods';
import MostSellFoodsSection from '../components/homePage/mostSellFoods';
import NewsLetterSection from '../components/homePage/newsletter';
import ProductCategorySection from '../components/homePage/productCategory';
import ResponsibilitiesSection from '../components/homePage/responsibilities';
import ReviewSection from '../components/homePage/reviewSection';
const HomePage = () => {
    return ( 
        <>
            <BannerSection />
            <ProductCategorySection />
            <LatestItemsSection />
            <BannerSecondSection />
            <MostSellFoodsSection />
            <BannerThirdSection />
            <ChefsSection />
            <BannerFourthSection />
            <ReviewSection />
            <NewsLetterSection />
            <ResponsibilitiesSection />
        </>
     );
}
 
export default HomePage;