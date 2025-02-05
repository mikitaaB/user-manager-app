import { config } from 'dotenv';
import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.mjs";

config();

const app = express();

const corsOptions = {
    origin: process.env.CLIENT_ORIGIN || "http://localhost:8081",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use("/api/", userRoutes);

userRoutes(app);

try {
    app.listen(process.env.NODE_DOCKER_PORT || 8080, () => {
        console.log(`App is running on port ${process.env.NODE_DOCKER_PORT || 8080}...`);
    });
} catch (e) {
    console.error('Server Error: ', e.message);
    process.exit(1);
}

const shutdown = async () => {
    console.log('Closing sequelize connections');
    await db.sequelize.close();
    console.log('Exit');
    process.exit(0);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);