import { Module } from '@nestjs/common';
import { CompaniesController } from './company.controller';
import { CompaniesService } from './company.service';
import { companyProviders } from './company.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CompaniesController],
  providers: [CompaniesService, ...companyProviders],
})
export class CompanyModule {}
