import validator from "validator";
import validTxt from "./validate-text.js";

const validateRegisterInput = (data) => {
  let errors = {};
  data.handle = validTxt(data.handle) ? data.handle : "";
  data.email = validTxt(data.email) ? data.email : "";
  data.password = validTxt(data.password) ? data.password : "";
  data.password2 = validTxt(data.password2) ? data.password2 : "";

  if (!validator.isLength(data.handle, { min: 2, max: 30 })) {
    errors.handle = "Handle must be between 2 and 30 characters";
  }

  if (validator.isEmpty(data.handle)) {
    errors.handle = "Handle field is required";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required";
  }

  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
export default validateRegisterInput;
