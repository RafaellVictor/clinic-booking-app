import express from "express";
import {
  createBooking,
  getAllBookingsFromUser,
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/bookings", createBooking);
router.get("/bookings/patients/:patient_id", getAllBookingsFromUser);

export default router;
