import { inject, injectable } from "tsyringe";
import { v4 } from "uuid";

import { encryptPassword } from "@utils/bcrypt";
import { IRequestCreateUser } from "@modules/users/dto/users";
import { telephoneFormat } from "@utils/formatData";
import { AppResponse } from "@helpers/responseParser";
import { AppError } from "@helpers/errorsHandler";
import { IUsersRepositories } from "@modules/users/iRepositories/IUsersRepositories";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepositories
  ) {}

  async execute({
    name,
    email,
    confirmEmail,
    password,
    confirmPassword,
    telephone,
    birthDate,
  }: IRequestCreateUser): Promise<AppResponse> {
    if (password !== confirmPassword) {
      throw new AppError({
        message: "As senhas não coincidem!",
      });
    }

    if (
      !password.match(
        /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
      )
    ) {
      throw new AppError({
        message: "Esta senha é muito fraca!",
      });
    }

    if (email !== confirmEmail) {
      throw new AppError({
        message: "Os e-mails não coincidem!",
      });
    }

    const listUserByEmail = await this.userRepository.listByEmail(email);

    if (listUserByEmail) {
      throw new AppError({
        message: "Usuário já cadastrado!",
      });
    }

    const passwordHash = await encryptPassword(password);

    const createUser = await this.userRepository.create({
      id: v4(),
      name,
      email,
      telephone: telephoneFormat(telephone),
      birthDate,
      password: passwordHash.hash,
    });

    return new AppResponse({
      statusCode: 201,
      message: "Usuário criado com sucesso!",
      data: {
        id: createUser.id,
        name: createUser.name,
        email: createUser.email,
        telephone: createUser.telephone,
        birthDate: createUser.birth_date,
      },
    });
  }
}

export { CreateUserUseCase };
