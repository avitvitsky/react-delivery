import { useParams } from "react-router";
import { selectRestaurantById } from "../components/redux/entities/restaurants/slice";
import { useSelector } from "react-redux";
import { Menu } from "../components/menu/Menu";

export const MenuPage = () => {
  const { restaurantId } = useParams();
  console.log(restaurantId);
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const { menu } = restaurant || {};

  return Boolean(menu.length) && <Menu menu={menu} />;
};
