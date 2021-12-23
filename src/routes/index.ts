import { NextFunction, Request, Response, Router } from "express";
const path = require("path");

const ROUTER = Router();

ROUTER.get('', (request: Request, response: Response) => {
    // return response.status(200).json({ message: 'Server works!' });
    return response.sendFile('index.html', {
        root: path.join(__dirname, '../')
    });
});

export default ROUTER;
