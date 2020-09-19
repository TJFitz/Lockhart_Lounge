const stripe = require("stripe")(
  "sk_test_51HSOaOAcMUxu1cv0ZCuAPAKI6MNtYyUKnLgtdytVd954TELFoITtIwB93jDY4CoC5myxgjjtaWpkz6HBmFLQql9000EkrXRoks"
);
const express = require("express");
const app = express();
app.use(express.static("."));
const YOUR_DOMAIN = "http://localhost:8080";
app.post("/create-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Stubborn Attachments",
            images: ["https://i.imgur.com/EHyR2nP.png"],
          },
          unit_amount: 50,
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
app.listen(4242, () => console.log("Running on port 4242"));
