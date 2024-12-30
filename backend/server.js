const express= require('express');
const mongoose= require('mongoose');
const productroutes=require('./routes/productroutes.js');
require('dotenv').config()
const cors=require('cors');
const app= express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect( process.env.Mongo_url)
.then(()=>console.log('MongoDB Connected'))
.catch((err)=>console.log(err));


const port=process.env.port;
app.use('/product',productroutes);


app.listen(port,()=>console.log(`server running ${port}`))





