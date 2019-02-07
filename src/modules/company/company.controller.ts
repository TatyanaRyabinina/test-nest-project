import {
  Controller,
  Get,
  Body,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { CompaniesService } from './company.service';
import { CompanyDto } from './dto/company.dto';

@Controller('/companies')
export class CompaniesController {
  constructor(private readonly companyService: CompaniesService) {}

  @Get()
  getAll() {
    const data = this.companyService.findAll();
    return { data };
  }

  @Get(':id')
  async getCompany(@Param('id') id: string) {
    const data = await this.companyService.findCompanyBy({ id });
    return { data };
  }

  @Post()
  async createCompany(@Body() companyData: CompanyDto) {
    const data = await this.companyService.addCompany(companyData);
    return { data };
  }

  @Put(':id')
  async updateCompany(
    @Body() companyData: CompanyDto,
    @Param('id') id: string,
  ) {
    const data = await this.companyService.updateCompany(companyData, id);
    return { data };
  }

  @Delete(':id')
  async deleteCompany(@Param('id') id: string) {
    const data = await this.companyService.removeCompany(id);
    return { data };
  }
}
