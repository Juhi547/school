import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../service/teachers.service';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {
  Teacher:any=[];
  constructor(private teacherService: TeachersService) {
    this.readTeacher();
   }
  ngOnInit() {}

  readTeacher(){
    this.teacherService.getTeachers().subscribe((data) => {
     this.Teacher = data;
    })    
  }
}
