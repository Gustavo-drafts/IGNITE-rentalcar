import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

// classe responsável por criar categoria
class CreateCategoryUseCase {

    // ICategoriesRepository - é um subtipo de 'CategoriesRepos...' e 'PostgresCateg...'
    constructor(private categoriesRepository: ICategoriesRepository) {} // inversão de dependência

    execute({ description, name }: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Categoria já existe!")
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
