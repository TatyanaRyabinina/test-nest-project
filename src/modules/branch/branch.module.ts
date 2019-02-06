import { Module } from '@nestjs/common';
import { BranchesController } from './branch.controller';
import { BranchesService } from './branch.service';
import { branchProviders } from './branch.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BranchesController],
  providers: [BranchesService, ...branchProviders],
})
export class BranchModule {}
