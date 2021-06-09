import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
//import { STUDENTS } from '../mock-students';
import { StudentService } from '../student.service';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  //selectedStudent?: Student;
  students: Student[] = [];

  // student: Student = {
  //   id: 1,
  //   name: 'María'
  // };

  constructor(private studentService: StudentService, private messageService: MessageService) {}

  ngOnInit() {
    this.getStudents();
  }
  
  // onSelect(student: Student): void {
  //   this.selectedStudent = student;
  //   this.messageService.add(`StudentsComponent: Selected student id=${student.id}`);
  // }

  // getStudents(): void {
  //   this.students = this.studentService.getStudents();
  // }

  getStudents(): void {
    this.studentService.getStudents()
    .subscribe(students => this.students = students);
  }

  add(name: string, email: string): void {
    name = name.trim();
    email = email.trim();
    if (!name || !email) { 
      return; 
    }
    if (email.indexOf('@') < 1) {
      return;
    }
    this.studentService.addStudent({ name, email } as Student)
      .subscribe(student => {
        this.students.push(student);
      });
  }

  delete(student: Student): void {
    this.students = this.students.filter(s => s !== student);
    this.studentService.deleteStudent(student.id).subscribe();
  }

}
