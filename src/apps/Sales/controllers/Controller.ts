import { Response, Request, NextFunction } from 'express';

export interface Controller {
    run(req: Request, res: Response, next: NextFunction): void
}