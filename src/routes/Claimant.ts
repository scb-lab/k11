import { Request, Response, Router } from "express";
import { BAD_REQUEST, CREATED, OK } from "http-status-codes";
import { ParamsDictionary } from "express-serve-static-core";

import { paramMissingError } from "@shared/constants";
import { modelType } from "@shared/Types";
import { claimantService } from "@services/claimant_service";
import Container from "typedi";
import { IClaimantBase, IClaimantSearch } from "@entities/Claimant";
import { jwtStrategy } from "@middlewares/jwt_middleware";
import { validate } from "@middlewares/validators/validation_middleware";
import {
  zClaimantAdd,
  zClaimantUpdate,
  zClaimantDelete,
  zClaimantAll,
  zClaimantFind,
} from "@zod_schemas/claimant";
import { _passport } from "@server";
// Init shared
const router = Router();
router.use(_passport.authenticate("jwt", { session: false }));

const _claimantService: claimantService = Container.get(claimantService);

/******************************************************************************
 *                      Get All Claimants - "GET /api/claimants/all"
 ******************************************************************************/

router.get(
  "/all",
  validate(zClaimantAll, "params"),
  async (req: Request, res: Response) => {
    try {
      const claimants = await _claimantService.findClaimant({});

      return res.status(OK).json({ claimants });
    } catch (error) {
      return res.status(500).json({
        error: "implementation error",
      });
    }
  }
);
/******************************************************************************
 *                      Get One Claimants - "POST /api/claimants/find"
 ******************************************************************************/

router.post(
  "/find",
  validate(zClaimantFind, "body"),
  async (req: Request, res: Response) => {
    try {
      const claimants = await _claimantService.findClaimant(
        req.body as IClaimantSearch
      );

      return res.status(OK).json({ claimants });
    } catch (error) {
      return res.status(500).json({
        error: "implementation error",
      });
    }
  }
);

/******************************************************************************
 *                       Add One - "POST /api/claimants/add"
 ******************************************************************************/

router.post(
  "/add",
  validate(zClaimantAdd, "body"),
  async (req: Request, res: Response) => {
    // Check parameters

    // Add new claimant
    try {
      let r = await _claimantService.createClaimant(req.body as IClaimantBase);
      return res.status(CREATED).json(r);
    } catch (error) {
      return res.status(500).json({
        error: "implementation error",
      });
    }
  }
);

/******************************************************************************
 *                       Update - "PUT /api/claimants/update"
 ******************************************************************************/

router.put(
  "/update",
  validate(zClaimantUpdate, "body"),
  async (req: Request, res: Response) => {
    // Check Parameters
    let { claimant, id }: { claimant: IClaimantBase; id: string } = req.body;
    // Update claimant
    try {
      let r = await _claimantService.updateClaimant(id, claimant);
      return res.status(OK).json(r);
    } catch (error) {
      return res.status(500).json({
        error: "implementation error",
      });
    }
  }
);

/******************************************************************************
 *                    Delete - "DELETE /api/claimants/delete/:id"
 ******************************************************************************/

router.delete(
  "/delete/:id",
  validate(zClaimantDelete, "params"),
  async (req: Request, res: Response) => {
    const { id } = req.params as ParamsDictionary;
    await _claimantService.deleteClaimant(id);
    return res.status(OK).end();
  }
);

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
