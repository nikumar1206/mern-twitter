export const validTxt = (str) => {
  return typeof str === "string" && str.trim() > 0;
};
export default validTxt;
