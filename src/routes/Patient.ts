import { Request, Response, Router } from "express";
import { BAD_REQUEST, CREATED, OK } from "http-status-codes";
import { ParamsDictionary } from "express-serve-static-core";

import { paramMissingError } from "@shared/constants";
import { modelType } from "@shared/Types";
import { patientService } from "@services/patient_service";
import Container from "typedi";
import { IPatientBase, IPatientSearch } from "@entities/Patient";
import { jwtStrategy } from "@middlewares/jwt_middleware";
import { validate } from "@middlewares/validators/validation_middleware";
import {
  zPatientAll,
  zPatientFind,
  zPatientAdd,
  zPatientUpdate,
  zPatientDelete,
} from "@zod_schemas/patient";
import { _passport } from "@server";

// Init shared
const router = Router();
router.use(_passport.authenticate("jwt", { session: false }));

const _patientService: patientService = Container.get(patientService);

/******************************************************************************
 *                      Get All Patients - "GET /api/patients/all"
 ******************************************************************************/

router.get(
  "/all",
  validate(zPatientAll, "params"),
  async (req: Request, res: Response) => {
    try {
      const patients = await _patientService.findPatient({});
      return res.status(OK).json({ patients });
    } catch (error) {
      return res.status(500).json({
        error: "implementation error",
      });
    }
  }
);
/******************************************************************************
 *                      Get One Patient - "POST /api/patients/find"
 ******************************************************************************/

router.post(
  "/find",
  validate(zPatientFind, "body"),
  async (req: Request, res: Response) => {
    try {
      const patients = await _patientService.findPatient(
        req.body as IPatientSearch
      );
      return res.status(OK).json({ patients });
    } catch (error) {
      return res.status(500).json({
        error: "implementation error",
      });
    }
  }
);
/******************************************************************************
 *                       Add One - "POST /api/patients/add"
 ******************************************************************************/

router.post(
  "/add",
  validate(zPatientAdd, "body"),
  async (req: Request, res: Response) => {
    // Check parameters
    try {
      const patient = req.body as IPatientBase;

      // Add new patient
      let r = await _patientService.createPatient(patient);
      return res.status(CREATED).json(r);
    } catch (error) {
      return res.status(500).json({
        error: "implementation error",
      });
    }
  }
);

/******************************************************************************
 *                       Update - "PUT /api/patients/update"
 ******************************************************************************/

router.put(
  "/update",
  validate(zPatientUpdate, "body"),
  async (req: Request, res: Response) => {
    // Check Parameters
    try {
      const { patient, id }: { patient: IPatientBase; id: string } = req.body;

      // Update patient
      let r = await _patientService.updatePatient(id, patient);
      return res.status(OK).json(r);
    } catch (error) {
      return res.status(500).json({
        error: "implementation error",
      });
    }
  }
);

/******************************************************************************
 *                    Delete - "DELETE /api/patients/delete/:id"
 ******************************************************************************/

router.delete(
  "/delete/:id",
  validate(zPatientDelete, "params"),
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params as ParamsDictionary;
      await _patientService.deletePatient(id);
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
