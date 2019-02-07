import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Company } from './company.entity';
import { CompanyDto } from './dto/company.dto';

@Injectable()
export class CompaniesService {
  constructor(
    @Inject('CompaniesRepository')
    private readonly companiesRepository: typeof Company,
  ) {}

  async findAll(): Promise<Company[]> {
    return await this.companiesRepository.findAll<Company>();
  }

  async findCompanyBy(params): Promise<Company> {
    const company = await this.companiesRepository.findOne<Company>({
      where: params,
    });
    if (company) {
      return company;
    }
    throw new NotFoundException();
  }

  async addCompany(data: CompanyDto): Promise<Company> {
    return await this.companiesRepository.create<Company>(data);
  }

  async updateCompany(data: CompanyDto, id: string): Promise<Company> {
    const company = await this.findCompanyBy({ id });
    return company.update(data);
  }

  async removeCompany(id: string) {
    const company = await this.findCompanyBy({ id });
    return company.destroy();
  }
}
