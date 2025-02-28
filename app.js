import express from 'express';
import { PORT } from './config/env.js'

const app =express();

app.get('/', (req,res)=> {
    res.send('welcome to subscription app')
})

app.listen( PORT,()=>{
    console.log(`app is running on PORT ${PORT} `)
});

export default app