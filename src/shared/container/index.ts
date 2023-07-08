import "./providers";
import { container } from "tsyringe";

import { IUsersRepositories } from "@modules/users/iRepositories/IUsersRepositories";
import { UserRepository } from "@modules/users/repositories/UserRepository";
import { IPostsRepositories } from "@modules/posts/iRepositories/IPostsRepositories";
import { PostRepository } from "@modules/posts/repositories/PostRepository";

container.registerSingleton<IUsersRepositories>(
  "UserRepository",
  UserRepository
);

container.registerSingleton<IPostsRepositories>(
  "PostRepository",
  PostRepository
);
