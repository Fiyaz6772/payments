const config = require("config")
const express = require("express")
const mongoose = require("mongoose")
const { ServerApiVersion } = require("mongodb")

const auth = require("./routes/auth")
const users = require("./routes/users")
const webhook = require("./routes/webhook")
const paymentIntent = require("./routes/paymentIntent")

const app = express()

if (!config.get("PrivateKey")) {
  console.error("FATAL ERROR: PrivateKey is not defined.")
  process.exit(1)
}
const key = config.get("PrivateKey")
mongoose
  .connect(key, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  })
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.error("Something went wrong", err))

app.use(express.json())

app.use("/api/login", auth)
app.use("/api/signUp", users)
app.use("/api/webhook", webhook)
app.use("/api/paymentIntent", paymentIntent)

app.listen(process.env.PORT || 5000, () => {
  console.log(`Application is running`)
})
