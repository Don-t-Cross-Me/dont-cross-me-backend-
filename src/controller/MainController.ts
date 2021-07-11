import { Router } from "express";

import Logger from "../middleware/LoggingMiddleware";
import UserModel from "../models/UserModel";

const router = Router();

router.use(Logger.logRequest);

// define the home page route
router.get("/", function (req, res) {
    UserModel.findOne({name: {$gte: ""}})
        .then(data => res.send(data!.name));
});

// define the about route
router.get("/about", function (req, res) {
    res.send("About Us");
});

export default router;
