import { Response, Request } from 'express';
import { CreateCategoryUseCase } from '../createCategory/CreateCategoryUseCase';




class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> { 
        const { name, description } = req.body; // recebe a requisição

        await this.createCategoryUseCase.execute({ name, description }); // executa o comando 

        return res.status(201).send();
    }
}

export { CreateCategoryController };