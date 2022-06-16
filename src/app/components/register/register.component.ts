import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * 
 * @param form 
 * @returns 
 */
function passwordsMatchValidator(form: any){

  const password = form.get('password');
  const verifypassword = form.get('verifypassword');

  if(password.hasError('required')){ return null}

  if(password.value !== verifypassword.value){
    verifypassword.setErrors({passwordsNotMatch:true})
  }
  else{
    verifypassword.setErrors(null)
  }

  return null

}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm !: FormGroup;

  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm(){
    this.registerForm = this.builder.group({
      firstname: ['',Validators.required],
      lastname:['',Validators.required],
      address:['',Validators.required],
      dob:['',Validators.required],
      gender:'Male',
      emailaddress:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      verifypassword:['',Validators.required]
    }, {
      validators: passwordsMatchValidator
    })
  }

  register(){
    console.log(this.registerForm.value)
  }

}
