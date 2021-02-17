const initialState = {
  isAuthenticated: true,
  userData: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_AUTH":
      const newstate = {
        ...state,
        isAuthenticated: action.value,
      };
      return newstate;
    case "SIGN_OUT":
      return {
        ...state,
        isAuthenticated: false,
      };
    case "GET_USER_DATA":
      return {
        ...state,
        userData: action.data,
      };

    default:
      return state;
  }
};

export default reducer;
