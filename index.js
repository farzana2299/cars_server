require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router=require('./router/router')
require('./database/connections')
const server=express()
server.use(router)
server.use(cors())
server.use(express.json())

const PORT=4000||process.env.PORT
server.listen(PORT,()=>{
    console.log(`----------Server started at the port ${PORT}------------`);
})