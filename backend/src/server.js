import express from 'express';
import dotenv from 'dotenv'

dotenv.config()

import notesRoutes from './routes/notesRoutes.js';
import {connectDB} from './config/db.js';


const port=process.env.PORT||3000;


const app=express()


//middleware
app.use(express.json())
// Parse form data (optional, if you're sending form submissions)
app.use(express.urlencoded({ extended: true }));

app.use('/api/notes', notesRoutes);


connectDB();


// Start the server
app.listen(port, async() => {
    console.log(`Server is running on http://localhost:${port}`);
});

