import { Category } from "../entities/Category";

//DTO => Dara Transfer Object
interface ICreateCategoryDTO {
    name: string;
    description: string;
}
0

interface ICategoriesRepository {
    findByName(name: string): Category;
    list(): Category[];
    create({ name, description }: ICreateCategoryDTO ): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };