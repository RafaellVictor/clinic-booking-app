import Booking from "../models/bookingModel.js";

export const createBooking = async (req, res) => {
  try {
    await Booking.create(req.body);
    res.status(201).json({ msg: "Booking created" });
  } catch (error) {
    res.send(error.message);
  }
};

export const getAllBookingsFromUser = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: { patient_id: req.params.patient_id },
    });
    res.status(200).json(bookings);
  } catch (error) {
    res.send(error.message);
  }
};
