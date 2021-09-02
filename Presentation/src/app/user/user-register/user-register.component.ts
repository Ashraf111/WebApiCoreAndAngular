import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationform!: FormGroup
  constructor() {

  }

  ngOnInit() {
    this.registrationform=new FormGroup({
    userName:new FormControl(null,Validators.required),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
    confirmPassword:new FormControl(null,[Validators.required,Validators.minLength(8)]),
    mobile:new FormControl(null,[Validators.required,Validators.maxLength(10)])

    },this.passwordmachingValidator);
  }
  // passwordmachingValidator(fg:FormGroup):boolean{
  //   const pass = fg.get('password')?.value;
  //   const confirmPass = fg.get('confirmPassword')?.value;
  //   return pass === confirmPass ? true : false
  //     //  return fg.get('password')?.value===fg.get('confirmPassword')?.value?false:{notmatched:true}
  // }

  passwordmachingValidator: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value
    return pass === confirmPass ? null : { notmatched: true }
  }
  get userName(){
    return this.registrationform.get('userName') as FormControl;
  }
  get email(){
    return this.registrationform.get('email') as FormControl;
  }
  get password(){
    return this.registrationform.get('password') as FormControl;
  }
  get confirmPassword(){
    return this.registrationform.get('confirmPassword') as FormControl;
  }
  get mobile(){
    return this.registrationform.get('mobile') as FormControl;
  }




  onSubmit(){
    console.log(this.registrationform);


  }

}
