import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-viewdetail-parent',
  templateUrl: './viewdetail-parent.component.html',
  styleUrls: ['./viewdetail-parent.component.css']
})
export class ViewdetailParentComponent implements OnInit {

  id:any;
  parent:any=[];
  constructor(private route:ActivatedRoute,
    private apiService:ApiService) {
      this.id=this.route.snapshot.params['id'];
      this.apiService.getParentById(this.id).subscribe(data=>{
        this.parent=data;
        })
     }

  ngOnInit() {}

}
