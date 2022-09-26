// import { Controller } from '../../../../Sales/controllers/Controller';
// import { Request, Response } from 'express';
// import { BackofficeProductClassPaginate } from '../../../../../Contexts/Backoffice/Product-Class/application/paginate/ProductClassPaginate';

// export class BackofficeProductClassPaginateController implements Controller {
//     constructor(
//         private readonly product: BackofficeProductClassPaginate
//     ) { }

//     async run(req: Request, res: Response) {
//         try {
//             const { limitOfDocuments, page } = req.params;
//             const result = await this.product.paginate(parseInt(limitOfDocuments), parseInt(page))
//             return res.status(201).send(result)
//         } catch (error) {
//         }
//     }
// }