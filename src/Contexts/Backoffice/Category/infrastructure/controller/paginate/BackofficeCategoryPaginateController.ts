// import { Response, Request } from 'express';
// import { Controller } from '../../../../../../apps/Sales/controllers/Controller';
// import { BackofficeCategoryPaginate } from "../../../application/paginate/CategoryPaginate";

// export class BackofficeCategoryPaginateController implements Controller {

//     constructor(
//         private readonly category: BackofficeCategoryPaginate
//     ) { }

//     async run(req: Request, res: Response) {
//         try {
//             const { limit, page } = req.params;
//             const result = await this.category.paginate(parseInt(limit), parseInt(page))
//             return res.status(201).send(result)
//         } catch (error) {
//         }
//     }
// }