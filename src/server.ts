import express from "express";
import cors from "cors";
import { connectDB } from "./config/db";
import demoBookingRoutes from "./routes/demoBooking.routes";

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.use("/api/demo-bookings", demoBookingRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});