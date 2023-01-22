export const LOGIN_AUTH = "LOGIN_AUTH";

export const loginAuth = (data) => {
  return {
    type: LOGIN_AUTH,
    payload: data,
  };
};
