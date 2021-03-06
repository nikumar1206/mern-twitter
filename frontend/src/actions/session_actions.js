import * as SessionAPI from "../util/session_api_util";
import jwt_decode from "jwt-decode";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_logIn";

const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors,
  };
};

const logoutUser = () => {
  return {
    type: RECEIVE_USER_LOGOUT,
  };
};

const receiveUserSignIn = () => {
  return {
    type: RECEIVE_USER_SIGN_IN,
  };
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  SessionAPI.setAuthToken(false);
  dispatch(logoutUser());
};

export const signUp = (user) => (dispatch) =>
  SessionAPI.signUp(user)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      SessionAPI.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded));
    })
    .catch((err) => {
      dispatch(receiveSessionErrors(err.response.data));
    });
// SessionAPI.signUp(user).then(() => (
//         dispatch(receiveUserSignIn())
//     ), err => (
//         dispatch(receiveSessionErrors(err.response.data))
//     ))
// );

export const logIn = (user) => (dispatch) =>
  SessionAPI.logIn(user)
    .then((res) => {
      console.log(res);
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      SessionAPI.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded));
    })
    .catch((err) => {
      dispatch(receiveSessionErrors(err.response.data));
    });
