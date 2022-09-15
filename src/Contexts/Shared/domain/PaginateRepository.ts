import { Paginate } from './Paginate';
export interface PaginateRepository {
    paginateSimpleQuery<T>(limit: number): Promise<Array<T>>;

    paginatePaginateQuery<T>(limit: number, startAfter: number): Promise<Array<T>>;

    paginate<T>(limitOfDocuments: number, page: number): Promise<Paginate<T>>;
}