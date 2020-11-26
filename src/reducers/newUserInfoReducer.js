import { INFO_SUBMITTED } from "../actions/index";

const newUserInfoReducer = (
  state = { email: "", name: "", isCreated: false },
  action
) => {
  switch (action.type) {
    case INFO_SUBMITTED:
      return [
        {
          email: action.email,
          name: action.name,
          isCreated: true,
        },
      ];

    default:
      return state;
  }
};

export default newUserInfoReducer;
