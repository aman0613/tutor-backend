import demoBookingRepository from "../repositories/demoBooking.repository";
import { IDemoBooking } from "../models/demoBooking.model";

class DemoBookingService {
  async createDemoBooking(data: Partial<IDemoBooking>) {
    return await demoBookingRepository.create(data);
  }
}

export default new DemoBookingService();
