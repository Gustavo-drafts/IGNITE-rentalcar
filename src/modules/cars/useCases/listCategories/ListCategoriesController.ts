import { Request, Response } from "express";

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {

    constructor(private ListCategoriesUseCase: ListCategoriesUseCase ) {}


    handle(req: Request, res: Response): Response {

        const all = this.ListCategoriesUseCase.execute();

        return res.json(all);

    }
}

export { ListCategoriesController };