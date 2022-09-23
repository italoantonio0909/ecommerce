import { Response, Request, CookieOptions } from 'express';
import { Controller } from '../../controllers/Controller';
import { CommandBus } from '../../../../Contexts/Shared/domain/CommandBus';
import { AuthenticationSignInCommand } from '../../../../Contexts/Sales/Authentication/application/AuthenticationSignInCommand';

export class AuthenticationSignInController implements Controller {

    constructor(private readonly commandBus: CommandBus) { }

    async run(req: Request, res: Response) {
        try {
            const idToken = req.body.idToken;
            const csrfToken = req.body.csrfToken;
            const email = req.body.email;
            const cookieCsrfToken = req.cookies.csrfToken;

            const command = new AuthenticationSignInCommand({ idToken, csrfToken, cookieCsrfToken, email });

            await this.commandBus.dispatch(command);

            const options: CookieOptions = {
                maxAge: 60 * 60 * 24 * 5 * 1000,
                httpOnly: true,
                secure: true
            };

            // res.cookie('session', sessionCookie, options);

            // res.end(JSON.stringify({ status: 'success' }));
        } catch (error) {
            return res.status(401).send();
        }
    }
}