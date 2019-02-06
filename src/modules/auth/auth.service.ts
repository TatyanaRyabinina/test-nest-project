import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { UsersService } from '../user/user.service';
import { User } from '../user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async login({ email, password }): Promise<{ token: string }> {
    const user: User = await this.usersService.findUserBy({ email });
    if (user && user.password === password) {
      const token: string = this.jwtService.sign(user.email);
      return {
        token,
      };
    }
    throw new UnauthorizedException();
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.usersService.findUserBy({ email: payload });
  }
}
