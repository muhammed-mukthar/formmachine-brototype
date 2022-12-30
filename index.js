const express = require("express");
const app = express();
const cors=require('cors')
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const apiroute=require('./routes/api')
dotenv.config();
mongoose.set("strictQuery", false);
 mongoose.connect(process.env.DB_CONNECT)
.then(()=>console.log('connected to db')
)
app.use(cors({ origin: process.env.CORS_VARS.split(", ") }));

app.use(express.json());
app.use('/api',apiroute)
app.listen(process.env.PORT||5000, () => {
  console.log("port running on 5000");
});
