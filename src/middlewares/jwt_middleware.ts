import randomString from "randomstring";
import jsonwebtoken, { VerifyErrors } from "jsonwebtoken";
import { cookieProps } from "@shared/constants";
import { Service } from "typedi";
import { IUserBase, User } from "@entities/User";
import { Request, Response, Router } from "express";
import { StrategyOptions } from "passport-jwt";
import { Expertise } from "@entities/Expertise";
import { Claimant } from "@entities/Claimant";
import { Patient } from "@entities/Patient";
import { ExpressLocalsModels, JwtPayload } from "@shared/Types";
var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const cookieExtractor = function (req: Request) {
  let token = null;
  if (req && req.signedCookies) {
    token = req.signedCookies["jwt"];
  }
  return token;
};
var opts: StrategyOptions = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: cookieProps.secret,
  issuer: cookieProps.options.domain,
  audience: cookieProps.options.domain,
  passReqToCallback: true,
};
export const jwtStrategy = new JwtStrategy(opts, async function (
  request: Request,
  jwt_payload: JwtPayload,
  next: any
) {
  debugger;
  let models: ExpressLocalsModels = request.app.locals.models;
  if (request.res) {
    request.res.locals.jwt = jwt_payload;
  }

  let users = await models.userModel.findUser({ _id: jwt_payload.id });
  if (users === null || users.length === 0) {
    return next(new Error("wrong auth"));
  }
  return next(false, users[0]);
});
