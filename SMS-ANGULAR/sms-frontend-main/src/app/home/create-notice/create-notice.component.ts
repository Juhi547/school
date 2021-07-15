
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NoticeService } from '../service/notice.service';

@Component({
  selector: 'app-create-notice',
  templateUrl: './create-notice.component.html',
  styleUrls: ['./create-notice.component.css']
})
export class CreateNoticeComponent implements OnInit {
  submitted=false;
  noticeForm:FormGroup;
  showMsg: boolean = false;
  constructor(
    public fb:FormBuilder,
    private router:Router,
    private ngZone: NgZone,
    private noticeService: NoticeService
  ) {
    this.mainForm(); 
  }

  ngOnInit() {}

  mainForm(){
    this.noticeForm=this.fb.group({
      heading:['',[Validators.required]],
      message:['',[Validators.required]]
    })
  }
   // Getter to access form control
  get myForm(){
    return this.noticeForm.controls;
  }
  
  onSubmit() {
    this.submitted=true;
    if (!this.noticeForm.valid) {
      return false;
    } else {
      this.noticeService.createNotice(this.noticeForm.value).subscribe(
        (res) => {
          console.log('Notice successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/notices'))
        }, (error) => {
          console.log('Notice not created');
        });
    }
    this.showMsg= true;
  }

}
