import dotenv from "dotenv";
dotenv.config({ path: './.env' }); // or wherever your .env is located

import connectionDB from "./db/index.js";
connectionDB();






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