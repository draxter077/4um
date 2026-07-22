import express from 'express'
import cors from 'cors'

import fundoSearch from "./pages/fundo/search/main.js"
import fundoGet from "./pages/fundo/get/main.js"
import bondsSearch from "./pages/bonds/search/main.js"
import bondsGet from "./pages/bonds/get/main.js"
import stats from "./pages/stats/main.js"

const app = express()
app.use(cors())
app.use(express.json());

app.post("/4um/fundo/search", fundoSearch)
app.post("/4um/fundo/get", fundoGet)
app.post("/4um/bonds/search", bondsSearch)
app.post("/4um/bonds/get", bondsGet)
app.post("/4um/stats", stats)

app.listen(5001, () => console.log("\nRunning on port 5001"));