const db = require("../models");
const YOUR_DOMAIN = "http://localhost:3000";

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
              images: [
                "https://www.pexels.com/photo/photo-of-different-empty-glasses-on-table-1484514/",
              ],
            },
            unit_amount: req.body.total,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${YOUR_DOMAIN}/success`,
      cancel_url: `${YOUR_DOMAIN}/cancel`,
    });
    res.json({ id: session.id });
  });
};
