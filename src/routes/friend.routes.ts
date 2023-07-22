import { Router } from "express";

import { CreateFriendController } from "@modules/friends/useCases/createFriendController";

import { authentication } from "src/middlewares/authentication";

const friendRoutes = Router();

friendRoutes.use(authentication);

friendRoutes.post("/:targetId", new CreateFriendController().handle);

export { friendRoutes };
