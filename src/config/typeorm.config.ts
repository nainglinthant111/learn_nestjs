import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Student } from '../modules/student/services/dtos/student.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'P@ssw0rd',
  database: 'nest_db',
  entities: [Student],
  synchronize: true, 
};
