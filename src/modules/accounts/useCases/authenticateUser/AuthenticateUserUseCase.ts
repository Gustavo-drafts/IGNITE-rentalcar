import { inject, injectable } from "tsyringe";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ email, password }: IRequest): Promise<IResponse> {

        // User exists ?
        const user = await this.usersRepository.findByEmail(email);

        if(!user) {
            throw new Error("email or password incorrect!");
        }


        // Password is correct ?
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new Error("email or password incorrect!");
        }



        // Generate JWT
        const token = sign({}, "9c51c1491464653d78aa60e67a9cf9cd", {
            subject: user.id,
            expiresIn: "1d",
        });

        return {
            user,
            token,
        };

    }
}


export { AuthenticateUserUseCase }