import express from "express";
import  dotenv from "dotenv"; 
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";
const app = express();

app.use(cors());
dotenv.config();

const PORT=4000 ;
//const URI = process.env.MongoDBURI;

//connect to mongoDB
try{
  mongoose.connect("mongodb://localhost:27017/bookstore",{
    useNewUrlParser:true,
    useUnifiedTopology:true
  });
  console.log("connected to mongoDB")

} catch(error){
  console.log("error in connecting",error)

}

//defining routes

app.use("/book",bookRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})