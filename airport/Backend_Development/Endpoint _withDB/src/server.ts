import express, { json } from 'express'
import router from './Router'
import authrouter from './Router/authRoutes'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'

const app= express()

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

const port = process.env.PORT

//Register some Middlewares
app.use(cors())
app.use(json()) //adds a body to the Request


app.use('/flights', router)
app.use('/auth',authrouter)


app.listen(port,()=>{
console.log("Running ...");

})