import { IsDefined, IsString, IsNumberString } from 'class-validator';

export class CompanyDto {
  @IsString()
  @IsDefined()
  companyName: string;

  @IsString()
  @IsDefined()
  country: string;

  @IsString()
  @IsDefined()
  state: string;

  @IsString()
  @IsDefined()
  city: string;

  @IsString()
  @IsDefined()
  street: string;

  @IsString()
  zip: string;

  @IsString()
  @IsDefined()
  countryCode: string;

  @IsDefined()
  @IsNumberString()
  phone: number;
}
