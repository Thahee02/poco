import Reviews from "./reviewSection/reviews";
import Testimonial from "./reviewSection/testimonial";

const ReviewSection = () => {
    return ( 
        <div className="my-16 xl:mt-24 xl:mb-5 px-4 flex max-xl:flex-col xl:justify-around xl:items-center gap-10 xl:gap-3">
            <Testimonial />
            <Reviews />
        </div>
     );
}
 
export default ReviewSection;