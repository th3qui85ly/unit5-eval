import { LOGIN_ID } from "./Action";

let initialValue = {
  loginDetails: null,
  loginStatus: false,
};
export const loginReducer = (item = initialValue, { type, payload }) => {
  switch (type) {
    case LOGIN_ID:
      return {
        ...value,
        loginDetails: payload,
        loginStatus: true,
      };

    default:
      return item;
  }
};