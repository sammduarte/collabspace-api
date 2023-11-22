import { prisma } from "@libs/prismaClient";
import {
  ICreatePost,
  IListAllPosts,
  IListAllPostsByUser,
  IPost,
  IUpdatePost,
} from "../dtos/posts";
import { IPostsRepositories } from "../iRepositories/IPostsRepositories";

class PostRepository implements IPostsRepositories {
  create({
    id,
    userId,
    content,
    tags,
    visibility,
  }: ICreatePost): Promise<IPost> {
    return prisma.posts.create({
      data: {
        id,
        user_id: userId,
        content,
        tags,
        visibility,
      },
      select: {
        id: true,
        user_id: true,
        content: true,
        tags: true,
        visibility: true,
        published_at: true,
        users: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar_url: true,
          },
        },
      },
    });
  }

  listById(id: string): Promise<IPost | null> {
    return prisma.posts.findFirst({
      where: { id },
      select: {
        id: true,
        user_id: true,
        content: true,
        tags: true,
        visibility: true,
        published_at: true,
      },
    });
  }

  listAll(page: number, limit: number): Promise<IListAllPosts[]> {
    return prisma.posts.findMany({
      orderBy: {
        published_at: "desc",
      },
      skip: page * limit,
      take: limit,
      select: {
        id: true,
        content: true,
        tags: true,
        visibility: true,
        published_at: true,
        users: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar_url: true,
          },
        },
        comments: {
          orderBy: {
            commented_at: "desc",
          },
          select: {
            id: true,
            content: true,
            commented_at: true,
            users: {
              select: {
                id: true,
                name: true,
                email: true,
                avatar_url: true,
              },
            },
            reactions: {
              select: {
                id: true,
                entity_type: true,
                reacted_at: true,
                users: {
                  select: {
                    id: true,
                    name: true,
                    email: true,
                    avatar_url: true,
                  },
                },
              },
            },
          },
        },
        reactions: {
          select: {
            id: true,
            entity_type: true,
            reacted_at: true,
            users: {
              select: {
                id: true,
                name: true,
                email: true,
                avatar_url: true,
              },
            },
          },
        },
      },
    });
  }

  listAllByUser(
    id: string,
    page: number,
    limit: number
  ): Promise<IListAllPostsByUser[]> {
    return prisma.posts.findMany({
      where: { user_id: id },
      orderBy: {
        published_at: "desc",
      },
      skip: page * limit,
      take: limit,
      select: {
        id: true,
        content: true,
        tags: true,
        visibility: true,
        published_at: true,
        users: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar_url: true,
          },
        },
        comments: {
          orderBy: {
            commented_at: "desc",
          },
          select: {
            id: true,
            content: true,
            commented_at: true,
            users: {
              select: {
                id: true,
                name: true,
                email: true,
                avatar_url: true,
              },
            },
            reactions: {
              select: {
                id: true,
                entity_type: true,
                reacted_at: true,
                users: {
                  select: {
                    id: true,
                    name: true,
                    email: true,
                    avatar_url: true,
                  },
                },
              },
            },
          },
        },
        reactions: {
          select: {
            id: true,
            entity_type: true,
            reacted_at: true,
            users: {
              select: {
                id: true,
                name: true,
                email: true,
                avatar_url: true,
              },
            },
          },
        },
      },
    });
  }

  count(): Promise<number> {
    return prisma.posts.count();
  }

  countByUser(id: string): Promise<number> {
    return prisma.posts.count({
      where: { user_id: id },
    });
  }

  async update({ id, content, tags, visibility }: IUpdatePost): Promise<void> {
    await prisma.posts.update({
      where: { id },
      data: {
        content,
        tags,
        visibility,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.posts.delete({
      where: { id },
    });
  }
}

export { PostRepository };
