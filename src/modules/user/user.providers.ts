import { User } from './user.entity';

export const userProviders = [
  {
    provide: 'UsersRepository',
    useValue: User,
  },
];
