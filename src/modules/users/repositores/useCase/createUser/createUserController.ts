import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const createUserCase = new CreateUserUseCase();

    createUserCase.execute();

    response.json({ msg: "Olá Mundo!" });
  }
}

export { CreateUserController };
