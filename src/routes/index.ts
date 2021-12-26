import { NextFunction, Request, Response, Router } from "express";

const ROUTER = Router();

ROUTER.get('/', (request: Request, response: Response) => {
    // return response.status(200).json({ message: 'Server works!' });
    // return response.sendFile('index.ejs', {
    //     root: path.join(__dirname, '../view/')
    // });
    return response.render('index');
});

export default ROUTER;
