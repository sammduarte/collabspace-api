interface IUser {
  id: string;
  name: string;
  email: string;
  telephone: string | null;
  birth_date: string;
  password: string;
  avatar_url: string | null;
  cover_url: string | null;
  bio: string | null;
  created_at: Date;
  active: boolean;
}

interface IRequestCreateUser {
  name: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  telephone: string | null;
  birthDate: string;
}

interface ICreateUser {
  id: string;
  name: string;
  email: string;
  telephone?: string | null;
  birthDate: string;
  password: string;
}

interface IRequestUpdateUser {
  name: string;
  telephone: string;
  birthDate: string;
  bio: string;
}

interface IUpdateUser {
  id: string;
  name?: string;
  telephone?: string | null;
  birthDate?: string;
  bio?: string | null;
}

interface IRequestUpdateUserAvatar {
  avatarUrl: string;
}

interface IUpdateUserAvatar {
  id: string;
  avatarUrl: string;
}

interface IRequestUpdateUserCover {
  coverUrl: string;
}

interface IUpdateUserCover {
  id: string;
  coverUrl: string;
}

export {
  IUser,
  ICreateUser,
  IRequestCreateUser,
  IRequestUpdateUser,
  IUpdateUser,
  IUpdateUserAvatar,
  IRequestUpdateUserAvatar,
  IUpdateUserCover,
  IRequestUpdateUserCover,
};
