//2. Create Reducer function that helps change our application state using actions we provide
//action takes a type of action property and a payload/data you want to use to change your state based
//on the action
const authenticationReducer = (
  state = { name: "Omotosho Joseph", gender: "Male" },
  action
) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return { ...state, ...action.payload };
    case "LOGGED_OUT_USER":
      return action.payload;
    default:
      return state;
  }
};

export { authenticationReducer };
