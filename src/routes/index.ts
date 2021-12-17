import { NextFunction, Request, Response, Router } from "express";

const ROUTER = Router();

ROUTER.get('', (request: Request, response: Response) => {
    return response.status(200).json({message: 'Server works!'});
});

export default ROUTER;
