import { createStore } from "redux";
import { loginReducer } from "./Reducer";

export const store = createStore(
  loginReducer
);