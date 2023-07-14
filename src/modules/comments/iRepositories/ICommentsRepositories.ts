import { IComment, ICreateComment, IUpdateComment } from "../dtos/comments";

interface ICommentsRepositories {
  create(comment: ICreateComment): Promise<IComment>;
  listById(id: string): Promise<IComment | null>;
  update(data: IUpdateComment): Promise<void>;
}

export { ICommentsRepositories };
