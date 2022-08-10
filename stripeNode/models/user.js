const Joi = require("joi")
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 35,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 35,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 16,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 255,
  },
  paid: {
    type: Boolean,
    required: true,
  },
})

const User = mongoose.model("User", userSchema)

function validateUser(user) {
  const schema = Joi.object({
    firstName: Joi.string().min(3).max(35).required(),
    lastName: Joi.string().min(3).max(35).required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
    phone: Joi.string().min(10).max(16).required(),
    password: Joi.string().min(8).max(255).required(),
  })

  return schema.validate(user)
}

exports.User = User
exports.validate = validateUser
