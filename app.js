import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user-routes.js';
import adminRouter from './routes/admin-routes.js';
import movieRouter from './routes/movie-routes.js';
import bookingsRouter from './routes/booking-routes.js';
dotenv.config();
const app = express();

//Now try to make your api call on the client side and it should work
//var cors = require('cors')
import cors from "cors";
app.use(cors())   
//middlewares
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter)
app.use("/movie", movieRouter)
app.use("/booking", bookingsRouter)

mongoose.connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.q3sx2rj.mongodb.net/?retryWrites=true&w=majority`
)
.then(() => 
    app.listen(5000, () => 
        console.log("Connected to Database Andd server is running")
    )
).catch(e=>console.log(e));


