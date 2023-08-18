import { NextFunction, Request, Response, Router } from "express";

const ROUTER = Router();


ROUTER.get('/', (request: Request, response: Response) => {
    return response.render('index');
});

ROUTER.get('/login', (request: Request, response: Response) => {
    return response.render('login');
});

ROUTER.get('/signup', (request: Request, response: Response) => {
    return response.render('signup');
});

ROUTER.get('/password', (request: Request, response: Response) => {
    return response.render('password');
});

ROUTER.get('/binary', (request: Request, response: Response) => {
    return response.render('binary');
});

ROUTER.get('/sha256', (request: Request, response: Response) => {
    return response.render('sha256');
});

ROUTER.get('/sha384', (request: Request, response: Response) => {
    return response.render('sha384');
});

ROUTER.get('/sha512', (request: Request, response: Response) => {
    return response.render('sha512');
});

export default ROUTER;
