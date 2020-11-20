import { createStore } from "redux";
import newUserInfoReducer from "./reducers/newUserInfoReducer";

const store = createStore(
  newUserInfoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
