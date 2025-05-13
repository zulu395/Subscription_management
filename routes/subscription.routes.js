import { Router }  from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req,res)=> res.send({title: 'GET all Subscribers'}));

subscriptionRouter.get('/:id', (req,res)=> res.send({title: 'GET subscription details'}));

subscriptionRouter.post('/', (req,res)=> res.send({title: 'CREATE Subscribers'}));

subscriptionRouter.put('/:id', (req,res)=> res.send({title: 'UPDATE Subscribers'}));

subscriptionRouter.delete('/', (req,res)=> res.send({title: 'DELETE Subscribers'}));

subscriptionRouter.get('/user/:id', (req,res)=> res.send({title: 'GET all user Subscribers'}));

subscriptionRouter.put('/:id/cancel', (req,res)=> res.send({title: 'CANCEL Subscribers'}));

subscriptionRouter.put('/upcoming-renewals', (req,res)=> res.send({title: 'GET upcoming renewals'}));

export default subscriptionRouter;