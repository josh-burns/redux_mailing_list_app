import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import callBackendAPI from "./api";

const logger = () => {
  return (next) => (action) => {
    if (action.type === "INFO_SUBMITTED") {
      callBackendAPI(action).then((res) => {});
    }
    const returnValue = next(action);
    return returnValue;
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);

export default store;
