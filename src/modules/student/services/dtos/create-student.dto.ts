// export class CreateStudentDto {
//     readonly name: string;
//     readonly age: number;
//     readonly grade: string;
//   }
  
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CreateStudentDto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  readonly name: string;

  @Column()
  readonly age: number;

  @Column()
  readonly grade: string;
}
