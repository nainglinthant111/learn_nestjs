import { Injectable } from '@nestjs/common';
import { StudentRepository } from '../repository/student.repository';
import { CreateStudentDto } from './dtos/create-student.dto';
import { Student } from './dtos/student.entity';
import { UpdateStudentDto } from './dtos/update-student.dto';

@Injectable()
export class StudentService {
  constructor(private readonly studentRepository: StudentRepository) {}

  create(createStudentDto: CreateStudentDto) {
    const student: Student = {
      id: Math.random().toString(36).substr(2, 9),
      ...createStudentDto,
    };
    return this.studentRepository.create(student);
  }

  findAll() {
    return this.studentRepository.findAll();
  }

  findOne(id: string) {
    return this.studentRepository.findOne(id);
  }

  update(id: string, updateStudentDto: UpdateStudentDto) {
    const student: any = {
      id,
      ...updateStudentDto,
    };
    return this.studentRepository.update(id, student);
  }

  remove(id: string) {
    return this.studentRepository.remove(id);
  }
}
