import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  Student:any=[];
  constructor(private studentService: StudentService) { 
    this.readStudent();
  }

  ngOnInit() {}

  readStudent(){
    this.studentService.getStudents().subscribe((data) => {
     this.Student = data;
    })    
  }
}
