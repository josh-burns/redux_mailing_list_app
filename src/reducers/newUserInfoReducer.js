const newUserInfoReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_INFO_SUBMITTED":
      console.log(action.email);
      return [...state, { email: action.email }];
    default:
      return state;
  }
};

export default newUserInfoReducer;
