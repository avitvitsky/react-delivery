import { useSelector } from "react-redux";
import { Review } from "./review";
import { selectReviewById } from "../redux/entities/reviews/slice";

export const ReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));

  const { text } = review || {};

  return <Review text={text} />;
};
