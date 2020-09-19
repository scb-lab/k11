import { Request, Response, Router } from "express";
import { BAD_REQUEST, CREATED, OK } from "http-status-codes";
import { ParamsDictionary } from "express-serve-static-core";

import { paramMissingError } from "@shared/constants";
import { modelType } from "@shared/Types";
import { expertiseService } from "@services/expertise_service";
import Container from "typedi";
import {
  IExpertiseBase,
  IExpertiseSearch,
  IExpertise,
} from "@entities/Expertise";
import { jwtStrategy } from "@middlewares/jwt_middleware";
import { validate } from "@middlewares/validators/validation_middleware";
import {
  zExpertiseAll,
  zExpertiseAdd,
  zExpertiseFind,
  zExpertiseUpdate,
  zExpertiseDelete,
} from "@zod_schemas/expertise";
import { _passport } from "@server";

// Init shared
const router = Router();
router.use(_passport.authenticate("jwt", { session: false }));

const _expertiseService: expertiseService = Container.get(expertiseService);

/******************************************************************************
 *                      Get All Expertises - "GET /api/expertises/all"
 ******************************************************************************/

router.get(
  "/all",
  validate(zExpertiseAll, "params"),
  async (req: Request, res: Response) => {
    try {
      const expertises = await _expertiseService.findExpertise({});
      return res.status(OK).json({ expertises });
    } catch (error) {
      return res.status(500).json({
        error: "implementation error",
      });
    }
  }
);
/******************************************************************************
 *                      Get One Expertises - "POST /api/expertises/find"
 ******************************************************************************/

router.post(
  "/find",
  validate(zExpertiseFind, "body"),
  async (req: Request, res: Response) => {
    try {
      const expertises = await _expertiseService.findExpertise(
        req.body as IExpertiseSearch
      );
      return res.status(OK).json({ expertises });
    } catch (error) {
      return res.status(500).json({
        error: "implementation error",
      });
    }
  }
);

/******************************************************************************
 *                       Add One - "POST /api/expertises/add"
 ******************************************************************************/

router.post(
  "/add",
  validate(zExpertiseAdd, "body"),
  async (req: Request, res: Response) => {
    // Check parameters

    // Add new expertise
    try {
      let r = await _expertiseService.createExpertise(
        req.body as IExpertiseBase
      );
      return res.status(CREATED).json(r);
    } catch (error) {
      return res.status(500).json({
        error: "implementation error",
      });
    }
  }
);

/******************************************************************************
 *                       Update - "PUT /api/expertises/update"
 ******************************************************************************/

router.put(
  "/update",
  validate(zExpertiseUpdate, "body"),
  async (req: Request, res: Response) => {
    // Check Parameters
    const {
      expertise,
      id,
    }: { expertise: IExpertiseBase; id: string } = req.body;

    // Update expertise
    try {
      let r = await _expertiseService.updateExpertise(id, expertise);
      return res.status(OK).json(r);
    } catch (error) {
      return res.status(500).json({
        error: "implementation error",
      });
    }
  }
);

/******************************************************************************
 *                    Delete - "DELETE /api/expertises/delete/:id"
 ******************************************************************************/

router.delete(
  "/delete/:id",
  validate(zExpertiseDelete, "params"),
  async (req: Request, res: Response) => {
    const { id } = req.params as ParamsDictionary;
    try {
      await _expertiseService.deleteExpertise(id);
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
