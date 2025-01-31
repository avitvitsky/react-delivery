import { useState } from "react";
import { restaurants } from "../../mock";
import { Restaurant } from "../restaurant/Restaurant";

export const Restaurants = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id
  );

  const activeRestaurant = restaurants.find(
    (restaurant) => restaurant.id === activeRestaurantId
  );

  return (
    <>
      <h1>Restaurants</h1>
      {restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          onClick={() => setActiveRestaurantId(restaurant.id)}
          disabled={restaurant.id === activeRestaurantId}
        >
          {restaurant.name}
        </button>
      ))}
      <Restaurant restaurant={activeRestaurant} />
    </>
  );
};
