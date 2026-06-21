import dotenv from "dotenv";
dotenv.config({ path: './.env' }); // or wherever your .env is located

import connectionDB from "./db/index.js";
connectionDB();