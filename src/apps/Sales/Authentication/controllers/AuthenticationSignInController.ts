import { Response, Request, NextFunction, CookieOptions } from 'express';
import { Controller } from '../../controllers/Controller';
import { AuthenticationSignIn } from '../../../../Contexts/Sales/Authentication/application/AuthenticationSignIn';

export class AuthenticationSignInController implements Controller {

    constructor(private readonly auth: AuthenticationSignIn) { }

    async run(req: Request, res: Response, _: NextFunction) {
        try {
            const idToken = req.body.idToken;
            const csrfToken = req.body.csrfToken;
            const cookieCsrfToken = req.cookies.csrfToken;

            // const sessionCookie = await this.auth.signIn(
            //     idToken,
            //     csrfToken,
            //     cookieCsrfToken
            // );

            // const options: CookieOptions = {
            //     maxAge: 60 * 60 * 24 * 5 * 1000,
            //     httpOnly: true,
            //     secure: true
            // };

            // res.cookie('session', sessionCookie, options);

            // res.end(JSON.stringify({ status: 'success' }));
        } catch (error) {
            return res.status(401).send();
        }
    }
}