const Joi = require("joi")
const bcrypt = require("bcrypt")
const express = require("express")

const { User } = require("../models/user")

const router = express.Router()

router.post("/", async (req, res) => {
  //validating request
  const { error } = validate(req.body)

  if (error) {
    return res.status(400).send(error.details[0].message)
  }

  let user = await User.findOne({ email: req.body.email })

  if (!user) {
    return res.status(404).send(`No user found for eamil ${req.body.email}`)
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password)
  if (!validPassword) {
    return res.status(400).send("Please check your password again")
  }

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

function validate(req) {
  const schema = Joi.object({
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
    password: Joi.string().min(8).max(255).required(),
  })

  return schema.validate(req)
}

module.exports = router
