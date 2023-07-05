import { Router } from "express";

import { CreateUserController } from "@modules/users/useCase/createUser/createUserController";
import { UpdateUserController } from "@modules/users/useCase/updateUser/updateUserController";

const userRoutes = Router();

userRoutes.post("/", new CreateUserController().handle);
userRoutes.put("/:id", new UpdateUserController().handle);

export { userRoutes };
