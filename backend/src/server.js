import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
import path from "path";

import notesRoutes from './routes/notesRoutes.js';
import {connectDB} from './config/db.js';
import { rateLimiter } from './middleware/Ratelimiter.js';


const port=process.env.PORT||5000;


const __dirname=path.resolve();

const app=express()


//middleware
app.use(express.json())
// Parse form data (optional, if you're sending form submissions)
app.use(express.urlencoded({ extended: true }));

// custom middleware

// app.use(rateLimiter)

app.use(cors());
// app.use((req,res,next)=>{
// console.log("req method is ",req.method," and url is ",req.url)
// next()
// })


app.use('/api/notes', notesRoutes);



if (process.env.NODE_ENV === "Production") {
    const frontendPath = path.join(__dirname, "frontend", "dist");
  
  
    app.use(express.static(frontendPath));
  
    app.get(/.*/, (req, res) => {
      res.sendFile(path.join(frontendPath, "index.html"));
    });
  }
  

connectDB().then(() => // Start the server
app.listen(port, async() => {
    console.log(`Server is running on http://localhost:${port}`);
}));



