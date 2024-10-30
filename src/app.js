import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import corsOption from "./Config/CorsConfig.js";
import proxy from 'express-http-proxy'
import response from "./Utils/ResponseHandler/ResponseHandler.js";
import ResTypes from "./Utils/Constants/ResTypes.js";
import HeaderValidation from "./MiddleWare/YupSchema/HeaderValidation.js";
import AuthHeaderYup from "./Utils/Validation/AuthHeaderYup.js";

dotenv.config()
const app = express()
const PORT = process.env.GATEWAY_PORT || 8349

app.use(cors(corsOption))
// app.use(express.json())

app.get('/', (req, res) => {
    return response(res, true,200, ResTypes.successMessages.server_online)
})

// proxies
app.use('/api/v1/auth' , proxy(process.env.AUTH_SERVICE_ROUTE))
app.use('/api/v1/chia-service' ,HeaderValidation(AuthHeaderYup.authHeaderSchema) ,  proxy(process.env.CHIA_SERVICE_ROUTE))

//not found route
app.use((req, res) => {
    return response(res, false,404, ResTypes.errors.not_found)
})

app.listen(PORT, () => {
    console.log(`Gateway is listening on ${PORT}`);
})