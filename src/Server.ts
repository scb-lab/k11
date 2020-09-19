import cookieParser from "cookie-parser";
import morgan from "morgan";
//import path from 'path';
import helmet from "helmet";
import { Mock } from "typemoq";
import mongoose from "mongoose";
import { IUserBase, IUser } from "@entities/User";
import express, { Request, Response, NextFunction } from "express";
import { BAD_REQUEST } from "http-status-codes";
import "express-async-errors";
import passport from "passport";

// import BaseRouter from "./routes";
import logger from "@shared/Logger";
import { User } from "@entities/User";
import { testDB, initiateModels } from "@shared/utils";
import { jwtStrategy } from "@middlewares/jwt_middleware";
//import { cookieProps } from '@shared/constants';
// init MongoDB

testDB(); // temporaty for tests
// Init express
export const _passport = passport.use(jwtStrategy);

const app = express();
app.use(_passport.initialize());
import BaseRouter from "./routes";
app.locals.models = initiateModels();

/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

// Show routes called in console during development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Security
if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}
// Add APIs
app.use("/api", BaseRouter);

// Print API errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message, err);
  return res.status(BAD_REQUEST).json({
    error: err.message,
  });
});

// Export express instance
export default app;
