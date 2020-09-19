import bcrypt from "bcrypt";
import { Request, Response, Router } from "express";
import { BAD_REQUEST, OK, UNAUTHORIZED } from "http-status-codes";
import { userService } from "@services/user_service";
import { sign } from "jsonwebtoken";
import {
  paramMissingError,
  loginFailedErr,
  cookieProps,
} from "@shared/constants";
import Container from "typedi";
import { IUserSearch } from "@entities/User";
import { JwtPayload } from "@shared/Types";

const router = Router();
const _userService: userService = Container.get(userService);

/******************************************************************************
 *                      Login User - "POST /api/auth/login"
 ******************************************************************************/

router.post("/login", async (req: Request, res: Response) => {
  // Check email and password present
  const { email, password } = req.body;
  if (!(email && password)) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
    });
  }
  // Fetch user
  const userSearch: IUserSearch = { email: email };
  let search = await _userService.findUser(userSearch);
  if (!search) {
    return res.status(UNAUTHORIZED).json({
      error: loginFailedErr,
    });
  }
  let user = search[0];
  // Check password
  const pwdPassed = await bcrypt.compare(password, user.pwdHash);
  if (!pwdPassed) {
    return res.status(UNAUTHORIZED).json({
      error: loginFailedErr,
    });
  }
  // Setup Admin Cookie
  let payload: JwtPayload = { id: user.id, user: user.toObject() };
  const token = sign(payload, cookieProps.secret || "ap45555dy_YJBH54764", {
    audience: cookieProps.options.domain,
    issuer: cookieProps.options.domain,
  });

  res.cookie(cookieProps.key, token, cookieProps.options);
  // Return
  return res.status(OK).end();
});

/******************************************************************************
 *                      Logout - "GET /api/auth/logout"
 ******************************************************************************/

router.get("/logout", async (req: Request, res: Response) => {
  const { key, options } = cookieProps;
  res.clearCookie(key, options);
  return res.status(OK).end();
});

/******************************************************************************
 *                                 Export Router
 ******************************************************************************/

export default router;
