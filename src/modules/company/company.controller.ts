import {
  Controller,
  Get,
  Body,
  BadRequestException,
  HttpStatus,
} from '@nestjs/common';
import { CompaniesService } from './company.service';

@Controller('/companies')
export class CompaniesController {
  constructor(private readonly companyService: CompaniesService) {}

  @Get()
  getAll() {
    const data = this.companyService.findAll();
    return { data };
  }
}
