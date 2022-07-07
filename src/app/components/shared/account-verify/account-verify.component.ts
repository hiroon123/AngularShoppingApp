import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-verify',
  templateUrl: './account-verify.component.html',
  styleUrls: ['./account-verify.component.css']
})
export class AccountVerifyComponent implements OnInit {

  verificationCodeForm !: FormGroup;

  constructor(
    private builder:FormBuilder,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.verificationCodeForm = this.builder.group({
      s1:['',[Validators.required]],
      s2:['',[Validators.required]],
      s3:['',[Validators.required]],
      s4:['',[Validators.required]],
      s5:['',[Validators.required]],
      s6:['',[Validators.required]]
    })
  }

  verify(){
    
  }

}
