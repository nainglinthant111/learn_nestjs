import { Injectable } from '@nestjs/common';
import { Student } from '../services/dtos/student.entity';


@Injectable()
export class StudentRepository {
  private students: Student[] = [];

  create(student: Student) {
    this.students.push(student);
    return student;
  }

  findAll(): Student[] {
    return this.students;
  }

  findOne(id: string): Student {
    return this.students.find(student => student.id === id);
  }

  update(id: string, student: Student) {
    const index = this.students.findIndex(s => s.id === id);
    if (index !== -1) {
      this.students[index] = student;
      return student;
    }
    return null;
  }

  remove(id: string) {
    const index = this.students.findIndex(s => s.id === id);
    if (index !== -1) {
      return this.students.splice(index, 1);
    }
    return null;
  }
}
