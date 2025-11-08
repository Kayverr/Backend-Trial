import express from 'express';
import 'dotenv/config';
import bookRoutes from './Routers/BookRoutes.js';
import studentRoutes from './Routers/StudentRoutes.js';

// init application
const app = express();

// middleware
app.use(express.json());

try {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Listening to port ${process.env.PORT || 3000}`);
    });
} catch (e) {
    console.log(e);
}

// routes
app.use('/books', bookRoutes);
app.use('/students', studentRoutes);

// This is the latest!!
