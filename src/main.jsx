import { createRoot } from "react-dom/client";
import { restaurants } from "./mock";

const rootElement = document.getElementById("root");

const reactRoot = createRoot(rootElement);

reactRoot.render(
  <div>
    {restaurants.map((restaurant) => {
      return (
        <div key={restaurant.id}>
          <h2>{restaurant.name}</h2>
          <h3>Меню</h3>
          <ul>
            {restaurant.menu.map((menuItem) => (
              <li key={menuItem.id}>{menuItem.name}</li>
            ))}
          </ul>
          <h3>Отзывы</h3>
          <ul>
            {restaurant.reviews.map((review) => (
              <li key={review.id}>{review.text}</li>
            ))}
          </ul>
        </div>
      );
    })}
  </div>
);
