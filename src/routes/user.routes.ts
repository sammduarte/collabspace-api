import { Router } from "express";

import { CreateUserController } from "@modules/users/useCases/createUser/createUserController";
import { UpdateUserController } from "@modules/users/useCases/updateUser/updateUserController";
import { InactivateUserController } from "@modules/users/useCases/inactivateUser/inactivateUserController";

const userRoutes = Router();

userRoutes.post("/", new CreateUserController().handle);
userRoutes.put("/:id", new UpdateUserController().handle);
userRoutes.delete("/:id", new InactivateUserController().handle);

export { userRoutes };
