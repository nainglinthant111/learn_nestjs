import { Body, Controller, Delete, Get, Logger, Param, Post, Put } from '@nestjs/common';
import { CreateStudentDto } from '../services/dtos/create-student.dto';
import { Student } from '../services/dtos/student.entity';
import { UpdateStudentDto } from '../services/dtos/update-student.dto';
import { StudentService } from '../services/student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  private readonly logger = new Logger(StudentController.name);

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto) {
    this.logger.log("Create Student: ", JSON.stringify(createStudentDto));
    return await this.studentService.create(createStudentDto);
  }

  @Get()
  async findAll() {
    const allStudents: Student[] = await this.studentService.findAll();
    this.logger.log(`Get All Students: ${allStudents.length}`);
    return allStudents;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const student: Student = await this.studentService.findOne(id);
    this.logger.log("Get Student By ID: ", JSON.stringify(student));
    return student;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    this.logger.log(`Update Student By ID: ${id} => `, JSON.stringify(updateStudentDto));
    return await this.studentService.update(id, updateStudentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    this.logger.log(`Delete Student By ID: ${id}`);
    return await this.studentService.remove(id);
  }
}
