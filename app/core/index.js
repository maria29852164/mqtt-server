import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app=new express();
const PORT=process.env.APP_PORT;
app.set('PORT',PORT)
app.listen(PORT,()=>console.log(`Server At running in the port ${PORT}`))