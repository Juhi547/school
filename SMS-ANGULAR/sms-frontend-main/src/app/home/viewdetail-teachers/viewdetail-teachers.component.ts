import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeachersService } from '../service/teachers.service';

@Component({
  selector: 'app-viewdetail-teachers',
  templateUrl: './viewdetail-teachers.component.html',
  styleUrls: ['./viewdetail-teachers.component.css']
})
export class ViewdetailTeachersComponent implements OnInit {

  id:any;
  teacher:any=[];
  constructor(private route:ActivatedRoute,
    private teacherService:TeachersService) {
      this.id=this.route.snapshot.params['id'];
      this.teacherService.getTeacherById(this.id).subscribe(data=>{
        this.teacher=data;
        })
     }

  ngOnInit() {}

}
