import "dotenv/config.js";
import express from "express";
import cors from "cors";
import patientRoute from "./routes/patientRoute.js";
import BookingRoute from "./routes/bookingRoute.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

// Route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(patientRoute);
app.use(BookingRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
