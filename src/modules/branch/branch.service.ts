import { Injectable, Inject } from '@nestjs/common';
// import { CreateCatDto } from './dto/create-cat.dto';
import { Branch } from './branch.entity';

@Injectable()
export class BranchesService {
  constructor(
    @Inject('BranchesRepository')
    private readonly branchesRepository: typeof Branch,
  ) {}

  async findAll(): Promise<Branch[]> {
    return await this.branchesRepository.findAll<Branch>();
  }
}
