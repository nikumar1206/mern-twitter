const validTxt = (str) => {
  return typeof str === "string" && str.trim().length > 0;
};
export default validTxt;
