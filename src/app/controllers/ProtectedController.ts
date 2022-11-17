import { Request, Response } from "express";

class ProctectedController {
    index(request: Request, response: Response) {
        response.json({ data: "Hello!" });
    }
};

export default new ProctectedController();