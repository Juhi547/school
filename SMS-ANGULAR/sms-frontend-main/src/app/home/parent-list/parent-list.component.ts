import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.css']
})
export class ParentListComponent implements OnInit {

  Parent:any=[];
  constructor(private apiService: ApiService) {
    this.readParent();
   }

  ngOnInit() {}

  readParent(){
    this.apiService.getParents().subscribe((data) => {
     this.Parent = data;
    })    
  }

}
