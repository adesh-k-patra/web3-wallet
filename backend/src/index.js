const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json({ limit: "50mb", extended: true, parameterLimit: 50000 }))
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
)

const v1Routes = require("./routes/v1")

app.use("/v1", v1Routes)

app.get("/", (_, res) => {
  res.status(200).send("Backend up and running")
})

app.listen(3000)
