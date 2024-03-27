// Loads .env file contents into process.env by default. 
// If DOTENV_KEY is present, it smartly attempts to load encrypted
//  .env.vault file contents into process.env.

require('dotenv').config()

const express =require('express')
const cors =require('cors')
const router =require('./Router/router')

// connection to connection
require("./DB/connection")


// Creates an Express application. The express() function is a top-level function exported by the express module.
const pfServer = express()

// Use core in express
pfServer.use(cors())
// to convert json to js type
pfServer.use(express.json())
pfServer.use(router)

const PORT =3000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`project fair server started at port ${PORT}`);
})

// 
pfServer.get("/",(req,res)=>{
    res.status(200).send(`<h1 style= "color:red"> Project Server started and waiting for client request!!! </h1>`)
})

