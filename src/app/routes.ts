import { Request, Response, Router } from "express";
import MainController from "./controllers/MainController";

const router = Router();

router.get('/', MainController.index);

export { router };