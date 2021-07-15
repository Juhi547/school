import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  submitted=false;
  
  // bloodgroup Names
  bloodgroupList: any = ['A+', 'A-', 'B+', 'B-', 'O+','O-','AB+','AB-']
  //myDate=Date.now();
   studentForm:FormGroup;
   showMsg: boolean = false;
  constructor(
    public fb:FormBuilder,
    private router:Router,
    private ngZone: NgZone,
    private studentService: StudentService
  ) { 
    this.mainForm();
  }

  ngOnInit() {}

  mainForm(){
    this.studentForm=this.fb.group({
      name:['',[Validators.required]],
      dob:['',[Validators.required]],
      uid:['',[Validators.required]],
      gender:['',[Validators.required]],
      bloodgroup: ['', [Validators.required]]

    })
  }
 // Choose city using select dropdown
//  changeBloodGroup(e) {
//   this.bloodGroupName.setValue(e.target.value, {
//     onlySelf: true
//   })
// }
  // Getter to access form control
  get myForm(){
    return this.studentForm.controls;
  }
// Getter method to access formcontrols
//    get bloodGroupName() {
//   return this.studentForm.get('bloodGroupName');
// }

  onSubmit() {
    this.submitted=true;
    if (!this.studentForm.valid) {
      return false;
    } else {
      this.studentService.createStudent(this.studentForm.value).subscribe(
        (res) => {
          console.log('Student successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/students'))
        }, (error) => {
          console.log('Student not created');
        });
    }
    this.showMsg= true;
  }

}
