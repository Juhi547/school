import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../service/notice.service';

@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.component.html',
  styleUrls: ['./notice-list.component.css']
})
export class NoticeListComponent implements OnInit {
  Notice:any=[];
  constructor(private noticeService: NoticeService) { 
    this.readNotice();
  }

  ngOnInit() {}

  readNotice(){
    this.noticeService.getNotices().subscribe((data) => {
     this.Notice = data;
    })    
  }

}
