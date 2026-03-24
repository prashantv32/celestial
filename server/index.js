// imports
const express = require("express")
const axios = require("axios")
const cors = require("cors")
require("dotenv").config()  // dotenv

// create app
const app = express() 
const port = 3000;
const api_key = process.env.NASA_API_KEY

// middleware
app.use(cors())  // cors
app.use(express.json())  // express json parser - you'll need this for React requests

// routes
// GET / → sends today's APOD
app.get('/apod',async (req,res)=>{
    try{
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`);
        const data = response.data;
        res.json(data);


    }catch(error){
        res.status(500).json({error : error.message})
    }
})
// GET /random → receives a date from frontend, calls NASA, sends back data
app.get("/apod/random",async (req,res)=>{
    try{
        const date = req.query.date;
    const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${date}`)
    const data = response.data
    res.json(data)
}catch(error){
    res.status(500).json({error : error.message})
}
})


app.listen(port,()=>{
    console.log(`Server is listening on ${port}`);
})