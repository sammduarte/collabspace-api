interface IPost {
  id: string;
  user_id: string;
  content: string;
  tags: string | null;
  visibility: number;
  published_at: Date;
}

interface IRequestCreatePost {
  content: string;
  tags: string;
  visibility: number;
}

interface ICreatePost {
  id: string;
  userId: string;
  content: string;
  tags?: string;
  visibility?: number;
}

interface iRequestUpdatePost {
  content: string;
  tags: string;
  visibility: number;
}

interface IUpdatePost {
  id: string;
  content: string;
  tags: string;
  visibility: number;
}

interface IListAllPosts {
  id: string;
  content: string;
  tags: string | null;
  visibility: number;
  published_at: Date;
  users: {
    id: string;
    name: string;
    avatar_url: string | null;
  };
  comments: {
    id: string;
    content: string;
    commented_at: Date;
    users: {
      id: string;
      name: string;
      avatar_url: string | null;
    };
  }[];
}

export {
  IPost,
  IRequestCreatePost,
  ICreatePost,
  iRequestUpdatePost,
  IUpdatePost,
  IListAllPosts,
};
