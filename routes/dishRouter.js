const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain')
    next();
})
.get((req,res,next) => {
    res.end('will send all the dishes');
})
.post((req,res,next) => {
    res.end(`will add the dish ${req.body.name} to value ${req.body.description}.`);
})
.put((req,res,next) =>{
    res.end("PUT operation not supported on /dishes")
})
.delete((req,res,next) =>{
    res.end('will delete all the dishes');
});

dishRouter.route('/:dishID')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain')
    next();
})
.get((req,res,next) => {
    res.end(`will send the dish ${req.params.dishID}`);
})
.post((req,res,next) => {
    res.end(`POST operation not supported on ${req.params.dishID}`);
})
.put((req,res,next) =>{
    res.end(`will update dish with ID: ${req.params.dishID} ,
        to name : ${req.body.name} & description :${req.body.description}`)
})
.delete((req,res,next) =>{
    res.end(`will delete dish: ${req.params.dishID}`);
});


module.exports= dishRouter;