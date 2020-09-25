const db = require("../models");
const YOUR_DOMAIN = "http://localhost:8080";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(stripeSecretKey);

module.exports = function (app) {
  app.post("/create-session", async (req, res) => {
    console.log(req.body);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: req.body.items,
              images: ["https://i.imgur.com/EHyR2nP.png"],
            },
            unit_amount: req.body.total,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${YOUR_DOMAIN}/success.html`,
      cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    });
    res.json({ id: session.id });
  });
};
