import {
  Controller,
  Get,
  Body,
  BadRequestException,
  HttpStatus,
} from '@nestjs/common';
import { BranchesService } from './branch.service';
// import { RunSequencerDto } from './dto/sequencer.dto';

@Controller('/branches')
export class BranchesController {
  constructor(private readonly branchService: BranchesService) {}

  @Get()
  getAll() {
    const data = this.branchService.findAll();
    return { data };
  }
}
