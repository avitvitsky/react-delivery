import { use } from "react";
import { Menu } from "../menu/Menu";
import { ReviewForm } from "../review-form/ReviewForm";
import { Reviews } from "../reviews/Reviews";
import { UserContext } from "../user-context";

export const Restaurant = ({ name, menu, reviewsIds }) => {
  const { user } = use(UserContext);

  if (!name) {
    return null;
  }

  return (
    <div>
      <h2>{name}</h2>
      {Boolean(menu.length) && <Menu menu={menu} />}
      {Boolean(reviewsIds.length) && <Reviews reviewsIds={reviewsIds} />}
      {Boolean(user.isAuthorized) && <ReviewForm />}
    </div>
  );
};
