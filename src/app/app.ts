import { config } from 'dotenv';
import express from 'express';
import session from 'express-session';
import { router } from './routes';
import { GoogleOAuth2Service } from './services/GoogleoAuth2Service';

const app = express();
const googleService = new GoogleOAuth2Service();
const passport = new GoogleOAuth2Service().createPassport();

config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({ secret: process.env.TOKEN_SECRET }));
app.use(passport.initialize());
app.use(passport.session());
app.use(router);

googleService.serializeUser();
googleService.deserializeUser();

app.listen(3000, () => {
    console.log("Running on port 3000")
});