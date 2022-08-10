const bcrypt = require("bcrypt")
const express = require("express")

const { User, validate } = require("../models/user")

const router = express.Router()

router.post("/", async (req, res) => {
  //validating request
  const { error } = validate(req.body)

  if (error) {
    return res.status(400).send(error.details[0].message)
  }

  // Check if this user already exisits
  let user = await User.findOne({ email: req.body.email })
  if (user) {
    return res.status(409).send(`Someone is already using ${req.body.email}.`)
  }

  user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    paid: false,
  })

  const salt = await bcrypt.genSalt(10)
  user.password = await bcrypt.hash(user.password, salt)

  await user.save()

  const data = {
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    paid: user.paid,
  }

  res.status(200).send(data)
})

module.exports = router
