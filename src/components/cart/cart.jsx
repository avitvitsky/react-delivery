import { CartItemContainer } from "../cart-item/cart-item-container";

import styles from "./cart.module.css";

export const Cart = ({ itemsIds }) => {
  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {itemsIds.map((id) => (
          <li className={styles.item} key={id}>
            <CartItemContainer id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
