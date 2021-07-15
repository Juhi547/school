import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-parent-create',
  templateUrl: './parent-create.component.html',
  styleUrls: ['./parent-create.component.css']
})
export class ParentCreateComponent implements OnInit {
   submitted=false;
   parentForm:FormGroup;
   showMsg: boolean = false;
  constructor(
    public fb:FormBuilder,
    private router:Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
  }

  ngOnInit() {}

  mainForm(){
    this.parentForm=this.fb.group({
      name:['',[Validators.required]],
      email:['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      mobile:['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      address:['',[Validators.required]],
      pincode:['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  // Getter to access form control
  get myForm(){
    return this.parentForm.controls;
  }

  onSubmit() {
    this.submitted=true;
    if (!this.parentForm.valid) {
      return false;
    } else {
      this.apiService.createParent(this.parentForm.value).subscribe(
        (res) => {
          console.log('Parent successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/parents'))
        }, (error) => {
          console.log('Parent not created');
        });
    }
    this.showMsg= true;
  }
}
