import { Router } from "express";
import demoBookingController from "../controllers/demoBooking.controller";

const router = Router();

router.post("/", demoBookingController.createDemoBooking);

export default router;
