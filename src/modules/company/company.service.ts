import { Injectable, Inject } from '@nestjs/common';
import { Company } from './company.entity';

@Injectable()
export class CompaniesService {
  constructor(
    @Inject('CompaniesRepository')
    private readonly companiesRepository: typeof Company,
  ) {}

  async findAll(): Promise<Company[]> {
    return await this.companiesRepository.findAll<Company>();
  }
}
