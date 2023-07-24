import { inject, injectable } from "tsyringe";
import { IFriendsRepositories } from "@modules/friends/iRepositories/IFriendsRepositories";
import { IUuidProvider } from "@shared/container/providers/uuidProvider/IUuidProvider";
import { AppResponse } from "@helpers/responseParser";
import { AppError } from "@helpers/errorsHandler";
import { EnumFriendActions } from "src/enums/friendActions";

interface IRequest {
  usrId: string;
  id: string;
}

@injectable()
class AcceptRequestUseCase {
  constructor(
    @inject("FriendRepository")
    private friendRepository: IFriendsRepositories,
    @inject("UuidProvider")
    private uuidProvider: IUuidProvider
  ) {}

  async execute({ usrId, id }: IRequest): Promise<AppResponse> {
    if (!this.uuidProvider.validateUUID(id)) {
      throw new AppError({
        message: "ID inválido!",
      });
    }

    const listFriendById = await this.friendRepository.listById(id);

    if (!listFriendById) {
      throw new AppError({
        message: "Solicitação não encontrada!",
      });
    }

    if (usrId !== listFriendById.user_id_2) {
      throw new AppError({
        message: "Operação não permitida!",
      });
    }

    if (listFriendById.action_id_1 !== EnumFriendActions.requested) {
      throw new AppError({
        message: "Solicitação não poder ser aceita mais!",
      });
    }

    await this.friendRepository.updateActionStatus({
      id,
      actionId2: EnumFriendActions.accepted,
    });

    return new AppResponse({
      message: "Solicitação aceita!",
    });
  }
}

export { AcceptRequestUseCase };
