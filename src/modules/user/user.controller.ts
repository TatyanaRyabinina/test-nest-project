import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('/users')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('current')
  async getUser(@Req() req) {
    const data = await this.usersService.findUserBy({ email: req.user.email });
    return { data };
  }
}
