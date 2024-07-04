import { Module } from '@nestjs/common';
import { StudentController } from './controller/student.controller';
import { StudentRepository } from './repository/student.repository';
import { StudentService } from './services/student.service';


@Module({
  controllers: [StudentController],
  providers: [StudentService, StudentRepository],
})
export class StudentModule {}
