import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";
import { toggleCardHidden } from "../../redux/cart/cart.actions";
import "./cart-icon.styles.scss";

const CartIcon = ({ itemCount = 0, toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon class="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCardHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
