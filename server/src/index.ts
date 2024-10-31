import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"


dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"))
app.use(cors())

const port = process.env.PORT || 9000

app.listen(port, () => {
  console.log(`App is listening on ${port}`)
});