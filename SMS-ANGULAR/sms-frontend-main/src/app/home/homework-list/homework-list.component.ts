import { Component, OnInit } from '@angular/core';
import { HomeworkService } from '../service/homework.service';

@Component({
  selector: 'app-homework-list',
  templateUrl: './homework-list.component.html',
  styleUrls: ['./homework-list.component.css']
})
export class HomeworkListComponent implements OnInit {

  Homework:any=[];
  constructor(private homeworkService: HomeworkService) { 
    this.readHomework();
  }

  ngOnInit() {}

  readHomework(){
    this.homeworkService.getHomeworks().subscribe((data) => {
     this.Homework = data;
    })    
  }
}
