import {
  Controller,
  Get,
  Body,
  BadRequestException,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ResetDto } from './dto/reset-pass.dto';

@Controller('/')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }

  @Post('/reset-password')
  async resetPass(@Body() resetDto: ResetDto, @Res() res) {
    const user = await this.authService.resetPass(resetDto);
    if (user) {
      return res.status(HttpStatus.OK).send();
    }
    return res.status(HttpStatus.NOT_FOUND).send();
  }
}
