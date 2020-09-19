import { Request, Response, NextFunction } from "express";
import { BAD_REQUEST } from "http-status-codes";
import { loginFailedErr } from "@shared/constants";
import { JwtPayload } from "@shared/Types";
export const checkAdmin = (scope: "admin" | "user") => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      let jwt: JwtPayload = res.locals.jwt;
      switch (scope) {
        case "admin":
          if (jwt.user.isAdmin) {
            next();
          } else {
            throw new Error();
          }
          break;

        default:
          throw new Error();

          break;
      }
    } catch (error) {
      return res.status(BAD_REQUEST).json({
        error: loginFailedErr,
      });
    }
  };
};
