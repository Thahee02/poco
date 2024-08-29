import Reviews from "./reviewSection/reviews";
import Testimonial from "./reviewSection/testimonial";

const ReviewSection = () => {
    return ( 
        <div className="my-24 px-4 flex justify-around items-center gap-3">
            <Testimonial />
            <Reviews />
        </div>
     );
}
 
export default ReviewSection;