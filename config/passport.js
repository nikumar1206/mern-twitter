import pkg from "passport-jwt";
const { Strategy, ExtractJwt } = pkg;
import mongoose from "mongoose";
import User from "../models/User.js";
import keys from "../config/keys.js";

const options = {};

options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken;
options.secretOrKey = keys.secretOrKey;

export default (passport) => {
  passport.use(
    new Strategy(options, (jwt_payload, done) => {
      console.log(jwt_payload);
      User.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );
};
