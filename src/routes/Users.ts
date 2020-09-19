import { Request, Response, Router } from "express";
import { BAD_REQUEST, CREATED, OK } from "http-status-codes";
import { ParamsDictionary } from "express-serve-static-core";
import bcrypt from "bcrypt";
import { paramMissingError, pwdSaltRounds } from "@shared/constants";
import { modelType } from "@shared/Types";
import { userService } from "@services/user_service";
import Container from "typedi";
import { IUserBase, IUserSearch } from "@entities/User";
import { validate } from "@middlewares/validators/validation_middleware";
import {
  zUserAll,
  zUserFind,
  zUserAdd,
  zUserUpdate,
  zUserDelete,
} from "@zod_schemas/user";
import { _passport } from "@server";
import { checkAdmin } from "@middlewares/validators/admin_middleware";

// Init shared
const router = Router();
router.use(_passport.authenticate("jwt", { session: false }));
const _userService: userService = Container.get(userService);

/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

router.get(
  "/all",
  checkAdmin("admin"),
  validate(zUserAll, "params"),
  async (req: Request, res: Response) => {
    try {
      const users = await _userService.findUser({});
      return res.status(OK).json({ users });
    } catch (error) {
      return res.status(500).json({
        error: "implementation error",
      });
    }
  }
);
/******************************************************************************
 *                      Get One User - "POST /api/users/find"
 ******************************************************************************/

router.post(
  "/find",
  validate(zUserFind, "body"),
  async (req: Request, res: Response) => {
    try {
      const users = await _userService.findUser(req.body as IUserSearch);
      return res.status(OK).json({ users });
    } catch (error) {
      return res.status(500).json({
        error: "implementation error",
      });
    }
  }
);

/******************************************************************************
 *                       Add One - "POST /api/users/add"
 ******************************************************************************/

router.post(
  "/add",
  checkAdmin("admin"),
  validate(zUserAdd, "body"),
  async (req: Request, res: Response) => {
    // Check parameters
    //TODO hash the password here
    try {
      const user = req.body as IUserBase;
      user.pwdHash = bcrypt.hashSync(user.pwdHash, pwdSaltRounds);
      // Add new user
      let r = await _userService.createUser(user);
      return res.status(CREATED).json(r);
    } catch (error) {
      return res.status(500).json({
        error: "implementation error",
      });
    }
  }
);

/******************************************************************************
 *                       Update - "PUT /api/users/update"
 ******************************************************************************/

router.put(
  "/update",
  validate(zUserUpdate, "body"),
  async (req: Request, res: Response) => {
    // Check Parameters
    try {
      const { user, id }: { user: IUserBase; id: string } = req.body;

      // Update user
      let r = await _userService.updateUser(id, user);
      return res.status(OK).json(r);
    } catch (error) {
      return res.status(500).json({
        error: "implementation error",
      });
    }
  }
);

/******************************************************************************
 *                    Delete - "DELETE /api/users/delete/:id"
 ******************************************************************************/

router.delete(
  "/delete/:id",
  checkAdmin("admin"),
  validate(zUserDelete, "params"),
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params as ParamsDictionary;
      await _userService.deleteUser(id);
      return res.status(OK).end();
    } catch (error) {
      return res.status(500).json({
        error: "implementation error",
      });
    }
  }
);

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
