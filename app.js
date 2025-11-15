import express from 'express';
import 'dotenv/config';
import cors from "cors"
import bookRoutes from './Routers/BookRoutes.js';
import studentRoutes from './Routers/StudentRoutes.js';

// init application
const app = express();

// Enable CORS in Frontend
let corsOptions = {
    origin: process.env.ORIGIN
}

// middleware
app.use(express.json());
app.use(cors(corsOptions));


// Use to log the request on the console
app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next();
})

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

// This is the latest 10-15-2025
