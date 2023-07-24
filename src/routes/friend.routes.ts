import { Router } from "express";

import { CreateFriendController } from "@modules/friends/useCases/createFriend/createFriendController";

import { authentication } from "src/middlewares/authentication";
import { CancelRequestController } from "@modules/friends/useCases/cancelRequest/cancelRequestController";

const friendRoutes = Router();

friendRoutes.use(authentication);

friendRoutes.post("/:targetId", new CreateFriendController().handle);
friendRoutes.patch("/cancelRequest/:id", new CancelRequestController().handle);

export { friendRoutes };
