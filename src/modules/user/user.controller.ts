import { Controller, Get } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('current')
  getUser() {
    // const data = this.usersService.findUserBy();
    // return { data };
  }
}
