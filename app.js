import express from 'express';
import { PORT } from './config/env.js'

// initial imports of Routers
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';

const app = express();

// importing the routes url to the app.js file

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/auth', userRouter)
app.use('/api/v1/auth', subscriptionRouter)


app.get('/', (req,res)=> {
    res.send('welcome to subscription app')
})

app.listen( PORT,()=>{
    console.log(`app is running on PORT ${PORT} `)
});

export default app


// mongdb pass: YYZVdfFze9BcCZDs