import {
  ICreateUser,
  IUpdateUser,
  IUpdateUserAtavar,
  IUser,
} from "@modules/users/dtos/users";

interface IUsersRepositories {
  create(user: ICreateUser): Promise<IUser>;
  listByEmail(email: string): Promise<IUser | null>;
  listById(id: string): Promise<IUser | null>;
  update(data: IUpdateUser): Promise<void>;
  updateAvatar(data: IUpdateUserAtavar): Promise<void>;
  inactivate(id: string, status: boolean): Promise<void>;
}

export { IUsersRepositories };
