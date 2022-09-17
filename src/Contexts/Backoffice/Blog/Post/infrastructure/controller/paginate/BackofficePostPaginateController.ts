import { Controller } from '../../../../../../../apps/Sales/controllers/Controller';
import { Request, Response } from 'express';
import { BackofficePostPaginate } from "../../../application/paginate/BackofficePostPaginate";

export class BackofficePostPaginateController implements Controller {
  constructor(
    private readonly post: BackofficePostPaginate
  ) { }

  async run(req: Request, res: Response) {
    try {
      const { limit, page } = req.params;
      const result = await this.post.paginate(parseInt(limit), parseInt(page));
      return res.status(201).send(result);
    } catch (error) {
    }
  }
}