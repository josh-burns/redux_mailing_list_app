import { DUPLICATE } from "../actions/index";

const isDuplicateContactReducer = (state = { isDuplicate: false }, action) => {
  switch (action.type) {
    case DUPLICATE:
      return { isDuplicate: action.isDuplicate };
    default: {
      return state;
    }
  }
};

export default isDuplicateContactReducer;
