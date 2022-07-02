import validator from "validator";
import validTxt from "./validate-text.js";

const validateLoginInput = (data) => {
  let errors = {};
  data.email = validTxt(data.email) ? data.email : "";
  data.password = validTxt(data.password) ? data.password : "";

  if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return { errors, isValid: Object.keys(errors).length === 0 };
};

export default validateLoginInput;
