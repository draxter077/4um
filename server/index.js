import express from 'express'
import cors from 'cors'

import init from "./pages/init/main.js"
import fundo from "./pages/fundo/main.js"

const app = express()
app.use(cors())
app.use(express.json());

app.get("/4um/init", init)
app.post("/4um/fundo", fundo)

app.listen(5001, () => console.log("\nRunning on port 5001"));