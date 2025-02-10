import { use } from "react";
import { Menu } from "../menu/Menu";
import { ReviewForm } from "../review-form/ReviewForm";
import { Reviews } from "../reviews/Reviews";
import { UserContext } from "../user-context";

export const Restaurant = ({ restaurant }) => {
  const { user } = use(UserContext);
  const { name, menu, reviews } = restaurant;

  if (!name) {
    return null;
  }

  return (
    <div>
      <h2>{name}</h2>
      {Boolean(menu.length) && <Menu menu={menu} />}
      {Boolean(reviews.length) && <Reviews reviews={reviews} />}
      {Boolean(user.isAuthorized) && <ReviewForm />}
    </div>
  );
};
