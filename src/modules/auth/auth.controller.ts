import {
  Controller,
  Get,
  Body,
  BadRequestException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('/')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }
}
// module.exports = {
// 	up: (queryInterface) => {
// 	  return queryInterface.bulkInsert('Roles', [
// 		{ roleName: 'user' },
// 		{ roleName: 'admin' },
// 		{ roleName: 'super-admin' }
// 	  ]);
// 	},
// 	down: (queryInterface) => {
// 	  return queryInterface.bulkDelete('Roles');
// 	}
//   };
