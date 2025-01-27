import { Dish } from "../dish/Dish";

export const Menu = ({ menu }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map((menuItem) => (
          <li key={menuItem.id}>
            <Dish dish={menuItem} />
          </li>
        ))}
      </ul>
    </>
  );
};
