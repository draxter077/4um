import express from 'express'
import rateLimit from 'express-rate-limit'
import cors from 'cors'

import adminLogin from "./pages/admin/login/main.js"
import adminSqlQuery from "./pages/admin/sqlQuery/main.js"
import clientLogin from "./pages/client/login/main.js"
import clientForgotPassword from "./pages/client/forgotPassword/main.js"

const app = express()
app.use(express.json())
app.use(cors(
    {
        origin:[
            "https://www.example.com.br"
        ],
        optionsSuccessStatus:200
    }
))
// app.use(rateLimit(
//     {
//         windowMs:15*60*1000,
//         max:100,
//         message:'IP blocked',
//         standardHeaders:true,
//         legacyHeaders:false
//     }
// ))

// Admin Page
app.post("/ph/admin/login", adminLogin)
app.post("/ph/admin/sqlQuery", adminSqlQuery)
// Client Page
app.post("/ph/client/login", clientLogin)
app.post("/ph/client/forgotPassword", clientForgotPassword)

app.listen(5001, () => console.log("\nRunning on port 5001"));