import { Branch } from './branch.entity';

export const branchProviders = [
  {
    provide: 'BranchesRepository',
    useValue: Branch,
  },
];
