import { Request, Response } from "express";

class LogoutController {
    index(request: Request, response: Response) {
        request.logout({ keepSessionInfo: false }, (err) => console.error(err))
        response.send('Goodbye!')
    };
};

export default new LogoutController();