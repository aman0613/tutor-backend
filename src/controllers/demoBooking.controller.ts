import { Request, Response } from "express";
import demoBookingService from "../services/demoBooking.service";

class DemoBookingController {
  async createDemoBooking(req: Request, res: Response) {
    try {
      const booking = await demoBookingService.createDemoBooking(req.body);

      return res.status(201).json({
        success: true,
        message: "Demo booking created successfully",
        data: booking,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }
}

export default new DemoBookingController();
