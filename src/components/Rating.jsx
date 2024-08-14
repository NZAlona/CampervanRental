import css from '../components/Rating.module.css';
import { FaStar } from 'react-icons/fa6';

export default function Rating({ rating }) {
  const maxRatingStars = 5;

  return (
    <div className={css.star - rating}>
      {[...Array(maxRatingStars)].map((_, index) => (
        <span key={index} className={`${css.star} ${index < rating ? css.filled : ''}`}>
          <FaStar />
        </span>
      ))}
    </div>
  );
}
