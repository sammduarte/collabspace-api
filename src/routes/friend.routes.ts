import { Router } from "express";

import { CreateFriendController } from "@modules/friends/useCases/createFriend/createFriendController";

import { authentication } from "src/middlewares/authentication";

import { CancelRequestController } from "@modules/friends/useCases/cancelRequest/cancelRequestController";
import { AcceptRequestController } from "@modules/friends/useCases/acceptRequest/acceptRequestController";
import { RecuseRequestController } from "@modules/friends/useCases/recuseRequest/recuseRequestController";

const friendRoutes = Router();

friendRoutes.use(authentication);

friendRoutes.post("/:targetId", new CreateFriendController().handle);
friendRoutes.patch("/cancelRequest/:id", new CancelRequestController().handle);
friendRoutes.patch("/acceptRequest/:id", new AcceptRequestController().handle);
friendRoutes.patch("/recuseRequest/:id", new RecuseRequestController().handle);

export { friendRoutes };
