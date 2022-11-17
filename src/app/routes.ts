import { Request, Response, Router } from "express";
import MainController from "./controllers/MainController";
import ProtectedController from "./controllers/ProtectedController";
import { GoogleoAuth2Service } from "./services/GoogleoAuth2Service";

const router = Router();
const passport = new GoogleoAuth2Service().createPassport();

router.get('/', MainController.index);
router.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }))
router.get('/protected', ProtectedController.index);

export { router };