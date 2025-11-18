// require('dotenv').config({path: `./env`})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: `./.env`,
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`App is running at : ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!", err);
    });

/*

import mongoose from "mongoose"
import { DB_NAME } from "./constants"
import express from "express"

const app = express()

;( async () => {
    try {
            console.log("ERROR : ",error)
            throw error
        })

        app.listen(process.env.PORT, ()=> {
            console.log(`App listening on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.error("ERROR : ",error)
        throw error
    }
})()

*/
