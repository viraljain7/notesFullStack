import express from 'express';
const port=process.env.PORT||3000;

import notesRoutes from './routes/notesRoutes.js';
import {connectDB} from './config/db.js';

const app=express()
app.use('/api/notes', notesRoutes);

connectDB();
// Start the server
app.listen(port, async() => {
    console.log(`Server is running on http://localhost:${port}`);
});

