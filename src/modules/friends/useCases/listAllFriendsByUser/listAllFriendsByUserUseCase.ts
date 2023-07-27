import { inject, injectable } from "tsyringe";
import { AppResponse } from "@helpers/responseParser";
import { IFriendsRepositories } from "@modules/friends/iRepositories/IFriendsRepositories";

interface IRequest {
  usrId: string;
}

@injectable()
class ListAllFriendsByUserUseCase {
  constructor(
    @inject("FriendRepository")
    private friendRepository: IFriendsRepositories
  ) {}

  async execute({ usrId }: IRequest): Promise<AppResponse> {
    const listAllFriendsByUser = await this.friendRepository.listAllByUser(
      usrId
    );

    const friends = listAllFriendsByUser.map((friend) => {
      return {
        id: friend.id,
        user1: {
          id: friend.users_friends_user_id_1Tousers.id,
          name: friend.users_friends_user_id_1Tousers.name,
          avatarUrl: friend.users_friends_user_id_1Tousers.avatar_url,
        },
        user2: {
          id: friend.users_friends_user_id_1Tousers.id,
          name: friend.users_friends_user_id_1Tousers.name,
          avatarUrl: friend.users_friends_user_id_1Tousers.avatar_url,
        },
        createdAt: friend.created_at,
      };
    });

    return new AppResponse({
      message: "Amizades listadas com sucesso!",
      data: {
        listAllFriendsByUser,
        friends,
      },
    });
  }
}

export { ListAllFriendsByUserUseCase };
