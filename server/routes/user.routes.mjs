import express from "express";
import { findAll } from "../controllers/user.controller.mjs";

const router = express.Router();

router.get("/", findAll);

export default (app) => {
    app.use('/api/users', router);
};