import express from "express";
import path from "path";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import passport from "passport";
import cors from "cors";
import * as PassportUtil from "./config/passport.js";
import keys from "./config/keys.js";
import users from "./routes/api/users.js";
import tweets from "./routes/api/tweets.js";
import expressListRoutes from "express-list-routes";
const app = express();

mongoose
  .connect(keys.default.mongoURI, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
PassportUtil.passportfunc(passport);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server is running on port ${port}`));

app.get("/", (req, res) => res.send("Hello World"));
app.use("/api/users", users);
app.use("/api/tweets", tweets);

// expressListRoutes(app, { prefix: "/api" });
