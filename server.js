import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import categoryRoutes from './routes/categoryRoutes.js';
import deviceRoutes from './routes/deviceRoutes.js';
import employeesRoutes from './routes/employeesRoute.js';
import cors from 'cors'

//configuring environment variable
dotenv.config();

//rest object
const app = express();

//database config
connectDB();

//middlewares
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/device', deviceRoutes);
app.use('/api/v1/employee', employeesRoutes);

//rest api
app.get('/', (req, res)=>{
    res.send({
        message:'Hello world'
    })
})

//port
const PORT = process.env.PORT || 8080 ;


//run
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})