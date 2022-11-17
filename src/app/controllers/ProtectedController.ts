import { Request, Response } from "express";

interface User {
    displayName: string;
};


class ProctectedController {
    index(request: Request, response: Response) {
        const user: User = request.user as User;
        response.json({ data: `Hello ${user.displayName}` });
    };
};

export default new ProctectedController();