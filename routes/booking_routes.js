const db = require("../models");

module.exports = function (app) {
  app.get("/api/booking", (req, res) => {
    db.Booking.findAll().then((dbBooking) => {
      res.json(dbBooking);
    });
  });

  app.post("/api/booking", function (req, res) {
    var booking = req.body;
    db.Booking.create({
      name: booking.name,
      email: booking.email,
      phone: booking.phone,
      date: booking.date,
      time: booking.time,
      qty: booking.qty,
      message: booking.message,
      createdAt: booking.createdAt,
      updatedAt: booking.updatedAt,
    });
    res.status(204).end();
  });
};
