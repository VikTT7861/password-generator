import { NextFunction, Request, Response, Router } from "express";

const ROUTER = Router();


ROUTER.get('/', (request: Request, response: Response) => {
    return response.render('index');
});

ROUTER.get('/password', (request: Request, response: Response) => {
    return response.render('password');
});

export default ROUTER;
