import { Router } from "express";
import UserRouter from "./Users";
import ClaimantRouter from "./Claimant";
import ExpertiseRouter from "./Expertise";
import PatientRouter from "./Patient";
import AuthRouter from "./Auth";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/users", UserRouter);
router.use("/claimants", ClaimantRouter);
router.use("/patients", PatientRouter);
router.use("/expertises", ExpertiseRouter);
router.use("/auth", AuthRouter);

// Export the base-router
export default router;
