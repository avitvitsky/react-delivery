import styles from "./restaurants.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../redux/entities/restaurants/slice";
import { RestaurantTabContainer } from "../restaurant-tab/restaurant-tab-container";
import { Outlet } from "react-router";

export const Restaurants = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  //   const navigate = useNavigate();

  return (
    <div>
      <h1>Restaurants</h1>
      <div className={styles.root}>
        {restaurantsIds.map((id) => (
          <RestaurantTabContainer
            key={id}
            id={id}
            // onClick={() => navigate(`/restaurants/${id}`)}
          />
        ))}
      </div>

      <Outlet />
    </div>
  );
};
