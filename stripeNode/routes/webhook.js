const config = require("config")
const express = require("express")

const key = config.get("StripeKey")
const stripe = require("stripe")(key)

const { User } = require("../models/user")

const router = express.Router()

router.post(
  "/",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    let event = req.body

    // Handle the event
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object
        updateUser(paymentIntent.metadata.uid)
        // Then define and call a function to handle the event payment_intent.succeeded
        break

      default:
        console.log(`Unhandled event type ${event.type}`)
    }
    res.send({ received: true })
  }
)

const updateUser = async (id) => {
  const update = { paid: true }
  await User.findByIdAndUpdate(id, update)
}

module.exports = router
