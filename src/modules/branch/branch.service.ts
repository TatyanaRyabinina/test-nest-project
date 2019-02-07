import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Branch } from './branch.entity';
import { BranchDto } from './dto/branch.dto';

@Injectable()
export class BranchesService {
  constructor(
    @Inject('BranchesRepository')
    private readonly branchesRepository: typeof Branch,
  ) {}

  async findAll(params): Promise<Branch[]> {
    return await this.branchesRepository.findAll<Branch>({ where: params });
  }

  async findBranchBy(params) {
    const branch = await this.branchesRepository.findOne({
      where: params,
    });
    if (branch) {
      return branch;
    }
    throw new NotFoundException();
  }

  async addBranch(branchData: BranchDto, companyId: string): Promise<Branch> {
    return await this.branchesRepository.create({ ...branchData, companyId });
  }

  async updateBranch(branchData, companyId, id) {
    const branch = await this.findBranchBy({ id, companyId });
    return branch.update(branchData);
  }

  async removeBranch(companyId, id) {
    const branch = await this.findBranchBy({ id, companyId });
    return branch.destroy();
  }
}
