import express from 'express';
import { router } from './routes';
import { GoogleoAuth2Service } from './services/GoogleoAuth2Service';

const app = express();
const googleService = new GoogleoAuth2Service();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

googleService.serializeUser();
googleService.deserializeUser();

app.listen(3000, () => {
    console.log("Running on port 3000")
});