import { Router } from "express";
import AuthFailureController from "./controllers/AuthFailureController";
import LogoutController from "./controllers/LogoutController";
import MainController from "./controllers/MainController";
import ProtectedController from "./controllers/ProtectedController";
import { isLoggedIn } from "./middleware/isLoggedIn";
import { GoogleoAuth2Service } from "./services/GoogleoAuth2Service";

const router = Router();
const passport = new GoogleoAuth2Service().createPassport();

router.get('/', MainController.index);
router.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }))

router.get('/google/callback', passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/failure',
}));
router.get('/auth/failure', AuthFailureController.index)

router.get('/protected', isLoggedIn, ProtectedController.index);
router.get('/logout', LogoutController.index);

export { router };