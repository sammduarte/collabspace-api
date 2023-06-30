import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";
import { IRequestCreateUser } from "@modules/users/dto/users";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const {
      name,
      email,
      confirmEmail,
      password,
      confirmPassword,
      telephone,
      birthDate,
    } = request.body as IRequestCreateUser;

    const createUserCase = new CreateUserUseCase();

    const result = await createUserCase.execute({
      name,
      email,
      confirmEmail,
      password,
      confirmPassword,
      telephone,
      birthDate,
    });

    response.json(result);
  }
}

export { CreateUserController };
