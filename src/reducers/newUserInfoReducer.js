const newUserInfoReducer = (state = [], action) => {
  switch (action.type) {
    case "FINAL_INFO_SUBMITTED":
      return [{ email: action.email, name: action.name, isCreated: true }];
    default:
      return state;
  }
};

export default newUserInfoReducer;
