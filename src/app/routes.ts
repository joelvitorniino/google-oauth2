import { Request, Response, Router } from "express";
import MainController from "./controllers/MainController";
import ProtectedController from "./controllers/ProtectedController";

const router = Router();

router.get('/', MainController.index);
router.get('/protected', ProtectedController.index);

export { router };