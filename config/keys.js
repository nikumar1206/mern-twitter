let keys;
if (process.env.NODE_ENV === "production") {
  keys = await import("./keys_prod.js");
} else {
  keys = await import("./keys_dev.js");
}
export default keys;
