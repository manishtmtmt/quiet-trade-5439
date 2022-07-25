import { LOGIN_AUTH } from "./action";

const auth = JSON.parse(localStorage.getItem("auth")) 
console.log(auth)

const initState = {
  isAuth: auth || false,
};

export const authReducer = (state=initState, { type, payload }) => {
  switch (type) {
    case LOGIN_AUTH:
      return { ...state, isAuth: payload };

    default:
      return state;
  }
};
