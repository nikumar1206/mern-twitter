import express from "express";
const app = express();
import bodyParser from "body-parser";
import mongoose from "mongoose";
import passport from "passport";
import passportfunc from "./config/passport.js";
import keys from "./config/keys.js";
import users from "./routes/api/users.js";
import tweets from "./routes/api/tweets.js";

mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(passport.initialize());
passportfunc(passport);
app.use("/api/users", users);
app.use("/api/tweets", tweets);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
