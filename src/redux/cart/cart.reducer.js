import { CartActionType } from "./cart.actiontypes";

const initialState = {
  visible: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionType.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        visible: !state.visible,
      };
    default:
      return state;
  }
};

export default cartReducer;
