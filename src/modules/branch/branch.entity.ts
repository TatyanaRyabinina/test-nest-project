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

  @ForeignKey(() => Company)
  @Column
  companyId: number;

  @BelongsTo(() => Company)
  public company: Company;
}
