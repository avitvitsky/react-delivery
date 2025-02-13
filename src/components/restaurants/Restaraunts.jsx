import { useState } from "react";

import styles from "./restaurants.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../redux/entities/restaurants/slice";
import { RestaurantContainer } from "../restaurant/restaurant-container";
import { RestaurantTabContainer } from "../restaurant-tab/restaurant-tab-container";

export const Restaurants = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantsIds[0]
  );

  return (
    <div>
      <h1>Restaurants</h1>
      <div className={styles.root}>
        {restaurantsIds.map((id) => (
          <RestaurantTabContainer
            key={id}
            id={id}
            onClick={() => setActiveRestaurantId(id)}
            disabled={id === activeRestaurantId}
          />
        ))}
      </div>
      <RestaurantContainer id={activeRestaurantId} />
    </div>
  );
};
