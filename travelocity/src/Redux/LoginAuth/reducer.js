import { LOGIN_AUTH } from "./action";

const auth = JSON.parse(localStorage.getItem("auth")) || false;
// console.log(auth)

const initState = {
  isAuth: auth,
};

export const authReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_AUTH:
      return { ...store, isAuth: payload };

    default:
      return store;
  }
};
