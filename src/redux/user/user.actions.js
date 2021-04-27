import { UserActionType } from "./user.actiontypes";

export const setCurrentUser = (user) => ({
  type: UserActionType.SET_CURRENT_USER,
  payload: user,
});
