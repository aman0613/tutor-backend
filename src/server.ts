import express from "express";
import cors from "cors";
import { connectDB } from "./config/db";
import demoBookingRoutes from "./routes/demoBooking.routes";

const app = express();

connectDB();

// Enable CORS
app.use(cors());

// This lets Express read JSON from the request body
app.use(express.json());

// Register routes
app.use("/api/demo-bookings", demoBookingRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
