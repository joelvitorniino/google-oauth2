import { Request, Response } from "express";

class MainController {
    index(request: Request, response: Response) {
        response.send('<a href="/auth/google">Authenticate with Google</a>')
    };
};

export default new MainController();