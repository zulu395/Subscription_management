import {Router} from 'express';

const userRouter = Router();
 userRouter.get('/',(req,res)=> res.send( {title:'Get all users'}));

 userRouter.get('/:id',(req,res)=> res.send( {title:'GET Users details'}));

 userRouter.post('/',(req,res)=> res.send( {title:'Create User'}));

 userRouter.put('/:id',(req,res)=> res.send( {title:'Update User '}));

 userRouter.delete('/:id',(req,res)=> res.send( {title:'Delete all Users '}));
 export default userRouter;