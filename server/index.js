import express from 'express'
import cors from 'cors'

import init from "./pages/init/main.js"

const app = express()
app.use(express.json())
//app.use(cors({origin:["https://www.example.com.br"],optionsSuccessStatus:200}))
app.use(cors())

app.get("/4um/init", init)

app.listen(5001, () => console.log("\nRunning on port 5001"));