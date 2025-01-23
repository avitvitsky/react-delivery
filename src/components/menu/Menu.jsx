import { Dish } from "../dish/Dish";

export const Menu = ({ menu }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map((menuItem) => (
          <Dish key={menuItem.id} dish={menuItem} />
        ))}
      </ul>
    </>
  );
};
