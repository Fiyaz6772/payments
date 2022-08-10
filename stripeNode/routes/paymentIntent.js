const config = require("config")
const express = require("express")

const key = config.get("StripeKey")

const stripe = require("stripe")(key)

const router = express.Router()

router.post("/", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "usd",
      payment_method_types: ["card"],
      description: req.body.description,
      receipt_email: req.body.receipt_email,
      shipping: {
        address: {
          city: "",
          country: "",
          line1: "",
          line2: "",
          postal_code: "",
          state: "",
        },
        name: req.body.name,
        phone: req.body.phone,
      },
      metadata: {
        uid: req.body.uid,
      },
    })

    res.json({ paymentIntent: paymentIntent.client_secret })
  } catch (error) {
    res.json({ error })
  }
})

module.exports = router
