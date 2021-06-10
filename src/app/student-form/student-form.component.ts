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

  model: Student = { //1
       id: 1,  //2
       name: 'María', //1
       email: 'maria@email', //2
       group: 'A' //2
  };

  constructor(
    private messageService: MessageService) { }


  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    this.log('submited student')
  }

  newStudent() { //1
    this.model = { //1
      id: 1, //1
      name: '', //1
      email: '', //1
      group: '' //1
    };
    this.log('new student')
  }

  private log(message: string) {
    this.messageService.add(`StudentService: ${message}`);
  }

}
