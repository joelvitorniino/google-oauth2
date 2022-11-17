import { Request, Response } from "express";

class AuthFailureController {
    index(request: Request, response: Response) {
        response.send('something went wrong...');
    };
};

export default new AuthFailureController();