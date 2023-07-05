import { Router } from "express";

import { CreateUserController } from "@modules/users/useCase/createUser/createUserController";
import { UpdateUserController } from "@modules/users/useCase/updateUser/updateUserController";
import { InactivateUserController } from "@modules/users/useCase/inactivateUser/inactivateUserController";

const userRoutes = Router();

userRoutes.post("/", new CreateUserController().handle);
userRoutes.put("/:id", new UpdateUserController().handle);
userRoutes.delete("/:id", new InactivateUserController().handle);

export { userRoutes };
