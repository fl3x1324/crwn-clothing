import { CartActionType } from "./cart.actiontypes";

export const toggleCardHidden = () => ({
  type: CartActionType.TOGGLE_CART_DROPDOWN,
});
