import { Router } from "express";
import { authentication } from "src/middlewares/authentication";
import { CreateCommentController } from "@modules/comments/useCases/createComment/createCommentController";

const commentRoutes = Router();

commentRoutes.use(authentication);

commentRoutes.post("/:id", new CreateCommentController().handle);

export { commentRoutes };
