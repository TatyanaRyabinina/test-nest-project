import {
  Controller,
  Get,
  Body,
  Post,
  Put,
  Delete,
  Param,
  UploadedFile,
  UseInterceptors,
  FileInterceptor,
} from '@nestjs/common';
import { CompaniesService } from './company.service';
import { CompanyDto } from './dto/company.dto';
import { multerOptions } from 'config/multer.config';

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
  @UseInterceptors(FileInterceptor('file', multerOptions))
  async createCompany(@Body() companyData: CompanyDto, @UploadedFile() file) {
    const data = await this.companyService.addCompany(companyData, file);
    return { data };
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  async updateCompany(
    @Body() companyData: CompanyDto,
    @Param('id') id: string,
    @UploadedFile() file,
  ) {
    const data = await this.companyService.updateCompany(companyData, id, file);
    return { data };
  }

  @Delete(':id')
  async deleteCompany(@Param('id') id: string) {
    const data = await this.companyService.removeCompany(id);
    return { data };
  }
}
