import express from 'express';
const port=3000;

import notesRoutes from './routes/notesRoutes.js';

const app=express()
app.use('/api/notes', notesRoutes);

 
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});