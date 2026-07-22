import DemoBooking, { IDemoBooking } from "../models/demoBooking.model";

class DemoBookingRepository {
  async create(data: Partial<IDemoBooking>) {
    const booking = await DemoBooking.create(data);

    const allBookings = await DemoBooking.find();

    console.log("Total bookings:", allBookings.length);
    console.log(allBookings);

    return booking;
  }
}

export default new DemoBookingRepository();
