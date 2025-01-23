import { Counter } from "../counter/Counter";

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  if (!name) {
    return null;
  }

  return (
    <div>
      <h2>{name}</h2>
      {Boolean(menu.length) && (
        <>
          <h3>Меню</h3>
          <ul>
            {menu.map((menuItem) => (
              <li key={menuItem.id}>
                <span>{menuItem.name}</span>
                <Counter />
              </li>
            ))}
          </ul>
        </>
      )}
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
    </div>
  );
};
