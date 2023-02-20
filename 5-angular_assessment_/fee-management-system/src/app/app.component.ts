import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'fee-management-system';

  studentsArray: Student[] = []


  studentDetails(name:string, id:string, balance:string ){
    event?.preventDefault()

    const newStudent: Student = {
      Name: name,
      StudentId: id,
      Balance: balance
    }
    
    this.studentsArray.push(newStudent)
    console.log(this.studentsArray)
  }
}



