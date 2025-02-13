import { ReviewContainer } from "../review/review-container";

export const Reviews = ({ reviewsIds }) => {
  return (
    <>
      <h3>Отзывы</h3>
      <ul>
        {reviewsIds.map((reviewId) => (
          <li key={reviewId}>
            <ReviewContainer id={reviewId} />
          </li>
        ))}
      </ul>
    </>
  );
};
