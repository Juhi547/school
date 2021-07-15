import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeworkService } from '../service/homework.service';

@Component({
  selector: 'app-create-homework',
  templateUrl: './create-homework.component.html',
  styleUrls: ['./create-homework.component.css']
})
export class CreateHomeworkComponent implements OnInit {

  submitted=false;
  homeworkForm:FormGroup;
  showMsg: boolean = false;
  constructor(
    public fb:FormBuilder,
    private router:Router,
    private ngZone: NgZone,
    private homeworkService: HomeworkService
  ) {
    this.mainForm(); 
  }

  ngOnInit() {}

  mainForm(){
    this.homeworkForm=this.fb.group({
      heading:['',[Validators.required]],
      message:['',[Validators.required]]
    })
  }
   // Getter to access form control
  get myForm(){
    return this.homeworkForm.controls;
  }
  
  onSubmit() {
    this.submitted=true;
    if (!this.homeworkForm.valid) {
      return false;
    } else {
      this.homeworkService.createHomework(this.homeworkForm.value).subscribe(
        (res) => {
          console.log('Homework successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/homeworks'))
        }, (error) => {
          console.log('Homework not created');
        });
    }
    this.showMsg= true;
  }


}
