const express = require('express')
const serverless = require("serverless-http");

const app = express()
const router = express.Router()

const port = process.env.PORT || 3000

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get("/json", (req,res) => {
    res.json({message: "Hello World!"})
})

api.use("/api/", router);

export const handler = serverless(api);

// app.listen(port, () => {
//   console.log(`netlify-express app listening on port ${port}`)
// })