import express from "express";
import mongoose from "mongoose";
import nconf from "nconf";

import { Config } from "./constants/constants";
import router from "./controller/MainController";

const app = express();

nconf.argv()
    .env()
    .file({ file: `${__dirname}/../config.json` });

app.use("/api", router);

const mongoDB = nconf.get(Config.MONGO_CONNECTION_STRING);
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

const PORT = nconf.get(Config.HTTP_PORT);

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
