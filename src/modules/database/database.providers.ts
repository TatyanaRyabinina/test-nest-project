import { Sequelize } from 'sequelize-typescript';
import { Branch } from '../branch/branch.entity';
import { Company } from '../company/company.entity';
import { User } from '../user/user.entity';

export const databaseProviders = [
  {
    provide: 'SequelizeToken',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'company',
      });
      sequelize.addModels([User, Company, Branch]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
