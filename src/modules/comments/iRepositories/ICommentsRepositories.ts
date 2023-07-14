import { IComment, ICreateComment } from "../dtos/comments";

interface ICommentsRepositories {
  create(comment: ICreateComment): Promise<IComment>;
}

export { ICommentsRepositories };
