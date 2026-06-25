import dotenv from "dotenv";
import {app} from './app.js'
import connectionDB from "./db/index.js";
dotenv.config({ path: './.env' }); // or wherever your .env is located





connectionDB()

.then(() => {
  app.listen(process.env.PORT||8000, () => {
    console.log(`Server is running on port ${process.env.PORT||8000}`);
  });


})
.catch((error) => {
  console.error("Error connecting to the database !!!", error);
  process.exit(1); // Exit the process with an error code
});






//require('dotenv').config({path:'./env'})

//import mongoose from "mongoose";
//import {DB_NAME } from "./constants";
//import connectionDB from "./db/index.js";

// dotenv.config({
//   path:'./env'
// })



//connectionDB()









/*
import express from "express";
const app=express()
( async ( ) => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      app.on("error",(error)=>{
        console.log("Error:",error);
        throw error
      })
    app.listen(process.env.PORT, ()=>{
      console.log(`Server is running on port ${process.env.PORT}`);
    })
  
 }catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error
  }
})()
  */