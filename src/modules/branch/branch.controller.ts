import {
  Controller,
  Get,
  Body,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { BranchesService } from './branch.service';
import { BranchDto } from './dto/branch.dto';

@Controller('/companies/:companyId/branches')
export class BranchesController {
  constructor(private readonly branchService: BranchesService) {}

  @Get()
  async getAll(@Param('companyId') companyId: string) {
    const data = await this.branchService.findAll({ companyId });
    return { data };
  }

  @Get(':id')
  async getBranch(
    @Param('companyId') companyId: string,
    @Param('id') id: string,
  ) {
    const data = await this.branchService.findBranchBy({ companyId, id });
    return data;
  }

  @Post()
  async createBranch(
    @Param('companyId') companyId: string,
    @Body() branchData: BranchDto,
  ) {
    const data = await this.branchService.addBranch(branchData, companyId);
    return { data };
  }

  @Put(':id')
  async updateBranch(
    @Param('companyId') companyId: string,
    @Param('id') id: string,
    @Body() branchData: BranchDto,
  ) {
    const data = await this.branchService.updateBranch(
      branchData,
      companyId,
      id,
    );
    return { data };
  }

  @Delete(':id')
  async removeBranch(
    @Param('companyId') companyId: string,
    @Param('id') id: string,
  ) {
    const data = await this.branchService.removeBranch(companyId, id);
    return { data };
  }
}
