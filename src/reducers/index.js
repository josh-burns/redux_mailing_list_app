import { combineReducers } from "redux";

import newUserInfoReducer from "./newUserInfoReducer";
import isDuplicateContactReducer from "./isDuplicateContactReducer";

const rootReducer = combineReducers({
  duplicate: isDuplicateContactReducer,
  newUser: newUserInfoReducer,
});

export default rootReducer;
