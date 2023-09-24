import "dotenv/config.js";
import express from "express";
import patientRoute from "./routes/patientRoute.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

// Route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(patientRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
