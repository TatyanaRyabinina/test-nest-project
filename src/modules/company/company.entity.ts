import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Branch } from '../branch/branch.entity';

@Table
export class Company extends Model<Company> {
  @Column
  companyName: string;

  @Column
  country: string;

  @Column
  state: string;

  @Column
  city: string;

  @Column
  street: string;

  @Column
  zip: string;

  @Column
  countryCode: string;

  @Column
  phone: number;

  @Column
  filePath: string;

  @HasMany(() => Branch)
  branches: Branch[];
}
