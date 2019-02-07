import { IsDefined, IsEmail, IsString } from 'class-validator';

export class ResetDto {
  @IsString()
  @IsEmail()
  @IsDefined()
  email: string;
}
