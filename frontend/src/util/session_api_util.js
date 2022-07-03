import axios from "axios";

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const signUp = (userData) => {
  return axios.post("http://localhost:5001/api/users/register", userData);
};

export const logIn = (userData) => {
  return axios.post("http://localhost:5001/api/users/login", userData);
};
