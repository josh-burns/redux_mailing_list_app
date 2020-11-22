import { createStore, applyMiddleware, compose } from "redux";
import newUserInfoReducer from "./reducers/newUserInfoReducer";
import callBackendAPI from "./api";

const logger = () => {
  return (next) => (action) => {
    callBackendAPI(action).then((res) => console.log(res));
    const returnValue = next(action);
    return returnValue;
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  newUserInfoReducer,
  composeEnhancers(applyMiddleware(logger))
);

export default store;
