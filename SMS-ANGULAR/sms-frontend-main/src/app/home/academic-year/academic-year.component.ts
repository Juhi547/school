import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AcademicYearService } from '../service/academic-year.service';

@Component({
  selector: 'app-academic-year',
  templateUrl: './academic-year.component.html',
  styleUrls: ['./academic-year.component.css']
})
export class AcademicYearComponent implements OnInit {
  submitted=false;
  AcademicYearForm:FormGroup;
   showMsg: boolean = false;
  constructor(
    public fb:FormBuilder,
    private router:Router,
    private ngZone: NgZone,
    private academicyearService: AcademicYearService
  ) { 
    this.mainForm();
  }

  ngOnInit() {}

  mainForm(){
    this.AcademicYearForm=this.fb.group({
      name:['',[Validators.required]],
      start:['',[Validators.required]],
      end:['',[Validators.required]], 
    })
  }
// Getter to access form control
get myForm(){
  return this.AcademicYearForm.controls;
}

onSubmit() {
  this.submitted=true;
  if (!this.AcademicYearForm.valid) {
    return false;
  } else {
    this.academicyearService.createAcademicDetails(this.AcademicYearForm.value).subscribe(
      (res) => {
        console.log('Student Academic Year successfully created!')
        this.ngZone.run(() => this.router.navigateByUrl('/acyears'))
      }, (error) => {
        console.log('Student  Academic Year not created');
      });
  }
  this.showMsg= true;
}
}
