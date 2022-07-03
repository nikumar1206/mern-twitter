import PROD_KEYS from "./keys_prod.js";
import DEV_KEYS from "./keys_dev.js";

let key;
if (process.env.NODE_ENV === "production") {
  key = PROD_KEYS;
} else {
  key = DEV_KEYS;
}
export default key;
