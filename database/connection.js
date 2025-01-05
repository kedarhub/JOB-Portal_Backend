import mongoose from "mongoose";
// username = kedarietlko
// mongo pass = w5COKk1fxpZ9d8aC
import { config } from "dotenv";
config({ path: "./config/config.env" });

export const connection = ()=>{
    console.log("process.env.MONGO_URI",process.env.MONGO_URI)
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "JOB_PORTAL_PROJECT"
    }).then(()=>{
        console.log("Connected to database.")
    }).catch(err=>{
        console.log(`Some error occured while connecting to database: ${err}`)
    })
}