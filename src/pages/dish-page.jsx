import { useParams } from "react-router";
import { selectDishById } from "../components/redux/entities/dishes/slice";
import { useSelector } from "react-redux";
import { use } from "react";
import { UserContext } from "../components/user-context";
import { DishCounter } from "../components/dishcounter/DishCounter";

export const DishPage = () => {
  const { user } = use(UserContext);
  const { dishId } = useParams();
  const dish = useSelector((state) => selectDishById(state, dishId));

  return (
    <div>
      <h3>{dish.name}</h3>
      <div>Price: {dish.price}</div>
      <span>Ingredients:</span>
      <ul style={{ margin: "5px 0" }}>
        {dish.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      {user.isAuthorized && <DishCounter dishId={dishId} />}
    </div>
  );
};
