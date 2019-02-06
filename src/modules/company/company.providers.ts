import { Company } from './company.entity';

export const companyProviders = [
  {
    provide: 'CompaniesRepository',
    useValue: Company,
  },
];
