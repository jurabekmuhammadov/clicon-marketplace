import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export const StarRating = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    const renderStars = () => {
        let stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={`full-${i}`} color="#FFA500" className='w-3 h-3 sm:w-4 sm:h-4' />);
        }
        if (halfStars) {
            stars.push(<FaStarHalfAlt key="half" color="#FFA500" className='w-3 h-3 sm:w-4 sm:h-4' />);
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FaRegStar key={`empty-${i}`} color="#FFA500" className='w-3 h-3 sm:w-4 sm:h-4' />);
        }
        return stars;
    };

    return (
        <div className='flex items-center gap-0.5'>
            {renderStars()}
        </div>
    );
};