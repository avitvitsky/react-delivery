import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectRestaurantById } from "../components/redux/entities/restaurants/slice";
import { Reviews } from "../components/reviews/Reviews";
import { ReviewForm } from "../components/review-form/ReviewForm";
import { use } from "react";
import { UserContext } from "../components/user-context";

export const ReviewsPage = () => {
  const { user } = use(UserContext);
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const { reviews } = restaurant || {};

  return (
    <>
      {Boolean(user.isAuthorized) && <ReviewForm />}
      {Boolean(reviews.length) && <Reviews reviewsIds={reviews} />}
    </>
  );
};
