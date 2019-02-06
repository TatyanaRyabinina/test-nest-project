import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersRepository')
    private readonly usersRepository: typeof User,
  ) {}

  async findUserBy(params): Promise<User> {
    return await this.usersRepository.findOne<User>({
      where: params,
    });
  }
}
