import { Component } from '@angular/core';

import { Student } from '../student';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {

  groups = ['A', 'B',
            'B2', 'C'];

  //model = new Student(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  model: Student = {
       id: 1,
       name: 'María',
       email: 'maria@email',
       group: 'A'
  };

  constructor(
    private messageService: MessageService) { }


  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    this.log('submited student')
  }

  newStudent() {
    this.model = {
      id: 1,
      name: '',
      email: '',
      group: ''
    };
    this.log('new student')
  }

  private log(message: string) {
    this.messageService.add(`StudentService: ${message}`);
  }

}
