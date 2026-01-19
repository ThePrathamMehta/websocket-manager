import express from "express";
import router from "./src/routes";
import './src/ws'

const app = express();

// api routes
app.use("/api/v1/",router);

app.listen(process.env.PORT,()=>{
    console.log("connected via http server");
})