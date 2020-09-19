import { Request, Response, NextFunction } from "express";
import { ZodType } from "zod";
import { BAD_REQUEST } from "http-status-codes";
import { paramMissingError } from "@shared/constants";
type prop = "body" | "params" | "query";
export const validate = (schema: ZodType<any>, property: prop) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req[property]);
      next();
    } catch (error) {
      return res.status(BAD_REQUEST).json({
        error: paramMissingError,
      });
    }
  };
};
