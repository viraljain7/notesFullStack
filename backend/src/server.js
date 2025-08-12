import express from 'express';
import dotenv from 'dotenv'

dotenv.config()

import notesRoutes from './routes/notesRoutes.js';
import {connectDB} from './config/db.js';
import { rateLimiter } from './middleware/Ratelimiter.js';


const port=process.env.PORT||3000;


const app=express()


//middleware
app.use(express.json())
// Parse form data (optional, if you're sending form submissions)
app.use(express.urlencoded({ extended: true }));

// custom middleware

app.use(rateLimiter)
// app.use((req,res,next)=>{
// console.log("req method is ",req.method," and url is ",req.url)
// next()
// })


app.use('/api/notes', notesRoutes);


connectDB().then(() => // Start the server
app.listen(port, async() => {
    console.log(`Server is running on http://localhost:${port}`);
}));



