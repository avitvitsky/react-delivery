import { useState } from "react";
import { restaurants } from "../../mock";
import { Restaurant } from "../restaurant/Restaurant";

import styles from "./restaurants.module.css";
import { Button } from "../button/Button";

export const Restaurants = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id
  );

  const activeRestaurant = restaurants.find(
    (restaurant) => restaurant.id === activeRestaurantId
  );

  return (
    <div>
      <h1>Restaurants</h1>
      <div className={styles.root}>
        {restaurants.map((restaurant) => (
          <Button
            key={restaurant.id}
            title={restaurant.name}
            onClick={() => setActiveRestaurantId(restaurant.id)}
            disabled={restaurant.id === activeRestaurantId}
            className={styles.button}
            size="md"
          />
        ))}
      </div>
      <Restaurant restaurant={activeRestaurant} />
      <Restaurant restaurant={activeRestaurant} />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
};
