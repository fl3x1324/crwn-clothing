import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = ({ itemCount = 0 }) => (
  <div className="cart-icon">
    <ShoppingIcon class="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

export default CartIcon;
