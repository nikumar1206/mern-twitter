import { Strategy, ExtractJwt } from "passport-jwt";
import keys from "./keys.js";
import User from "../models/User.js";

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.default.secretOrKey;

export const passportfunc = (passport) => {
  passport.use(
    new Strategy(options, (jwt_payload, done) => {
      User.findById(jwt_payload.id).then((user) => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      });
      // .catch((err) => console.log(err));
      // console.log(jwt_payload);
      // done();
    })
  );
};
