import { NextFunction, Request, Response, response } from "express";



function catchAll (err:any, requress:Request,respone:Response,next:NextFunction){
    console.log (err)
    response.status(err.status || 500).send(err.msg)
}
export default catchAll

