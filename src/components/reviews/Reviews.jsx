import { Review } from "../review/review";

export const Reviews = ({ reviews }) => {
  return (
    <>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <Review text={review.text} />
          </li>
        ))}
      </ul>
    </>
  );
};
