import express from "express";
import {
  signUpPatient,
  findAllPatient,
  loginPatient,
} from "../controllers/patientController.js";

const router = express.Router();

router.post("/patients", signUpPatient);
router.get("/patients", findAllPatient);
router.get("/patient", loginPatient);

export default router;
