import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-viewdetail-student',
  templateUrl: './viewdetail-student.component.html',
  styleUrls: ['./viewdetail-student.component.css']
})
export class ViewdetailStudentComponent implements OnInit {
   id:any;
   student:any=[];
   date1=new Date();
   
  constructor(private route:ActivatedRoute,
    private studentService:StudentService) { 
      this.id=this.route.snapshot.params['id'];
      this.studentService.getStudentById(this.id).subscribe(data=>{
        this.student=data;
        })
     }

  ngOnInit()
   { }
  
}
