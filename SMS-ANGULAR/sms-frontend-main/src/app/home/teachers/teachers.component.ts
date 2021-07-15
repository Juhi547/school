import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeachersService } from '../service/teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  submitted=false;
  teacherForm:FormGroup;
  showMsg: boolean = false;
  constructor(
    public fb:FormBuilder,
    private router:Router,
    private ngZone: NgZone,
    private teacherService: TeachersService
  ) { 
    this.mainForm();
  }

  ngOnInit(){ }

  mainForm(){
    this.teacherForm=this.fb.group({
      name:['',[Validators.required]],
      email:['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      mobile:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    })
  }
  // Getter to access form control
  get myForm(){
    return this.teacherForm.controls;
  }

  onSubmit() {
    this.submitted=true;
    if (!this.teacherForm.valid) {
      return false;
    } else {
      this.teacherService.createTeacher(this.teacherForm.value).subscribe(
        (res) => {
          console.log('Teacher successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/teachers'))
        }, (error) => {
          console.log('Teacher not created');
        });
    }
    this.showMsg= true;
  }
}
