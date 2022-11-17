import passport, { PassportStatic, use } from "passport";
import { Strategy, VerifyFunctionWithRequest } from "passport-google-oauth2";
import { configAuth } from "../config/config";

export class GoogleoAuth2Service {
    callback(request: any, accessToken: any, refreshToken: any, profile: any, done: any): VerifyFunctionWithRequest {
        return done(null, profile);
    };

    createPassport(): PassportStatic {
        const passport = use(new Strategy(configAuth, this.callback));

        return passport;
    };

    serializeUser() {
        const passport = this.createPassport();

        passport.serializeUser((user, done) => {
            done(null, user);
        });
    };

    deserializeUser() {
        const passport = this.createPassport();

        passport.deserializeUser((user, done) => {
            done(null, user);
        });
    }
}