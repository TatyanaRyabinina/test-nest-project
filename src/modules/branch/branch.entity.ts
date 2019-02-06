import {
  Model,
  Column,
  ForeignKey,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { Company } from '../company/company.entity';

@Table
export class Branch extends Model<Branch> {
  @Column
  branchName: string;

  @ForeignKey(() => Company)
  @Column
  companyId: number;

  @BelongsTo(() => Company)
  public company: Company;
}
