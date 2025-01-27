import { useState } from "react";
import { restaurants } from "../../mock";
import { Restaurant } from "../restaurant/Restaurant";

export const Restaurants = () => {
  const [restaurant, setRestaurant] = useState(restaurants[0]);

  return (
    <>
      <h1>Restaurants</h1>
      {restaurants.map((restaurant) => (
        <button key={restaurant.id} onClick={() => setRestaurant(restaurant)}>
          {restaurant.name}
        </button>
      ))}
      <Restaurant restaurant={restaurant} />
    </>
  );
};
