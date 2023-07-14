import { prisma } from "@libs/prismaClient";
import { ICommentsRepositories } from "../iRepositories/ICommentsRepositories";
import { ICreateComment, IComment } from "../dtos/comments";

class CommentRepository implements ICommentsRepositories {
  create({ id, postId, userId, content }: ICreateComment): Promise<IComment> {
    return prisma.comments.create({
      data: {
        id,
        post_id: postId,
        user_id: userId,
        content,
      },
    });
  }
}

export { CommentRepository };
