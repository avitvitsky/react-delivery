import { DishContainer } from "../dish/dish-container";

export const Menu = ({ menu }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map((dishId) => (
          <li key={dishId}>
            <DishContainer id={dishId} />
          </li>
        ))}
      </ul>
    </>
  );
};
