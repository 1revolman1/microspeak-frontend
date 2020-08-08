const initAuthReduces = {
  isAuth: false,
};

export const authReducer = (state = initAuthReduces, action) => {
  if (action.type === "SET_AUTH") {
    return {
      ...state,
      isAuth: true,
    };
  }
  if (action.type === "LOGOUT") {
    return {
      ...state,
      isAuth: false,
    };
  }
  return state;
};
