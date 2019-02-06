import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Branch } from '../branch/branch.entity';

@Table
export class Company extends Model<Company> {
  @Column
  companyName: string;

  @Column
  companyId: number;

  @HasMany(() => Branch)
  branches: Branch[];
}
