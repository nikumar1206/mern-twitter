import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import passport from "passport";
import * as PassportUtil from "./config/passport.js";
import keys from "./config/keys.js";
import users from "./routes/api/users.js";
import tweets from "./routes/api/tweets.js";
import expressListRoutes from "express-list-routes";
const app = express();
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
PassportUtil.passportfunc(passport);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server is running on port ${port}`));

app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/users", users);
app.use("/api/tweets", tweets);

expressListRoutes(app, { prefix: "/api" });
