import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  user:User;
  form: FormGroup = new FormGroup({});
  message: String;

  constructor(
    private router:Router,
    public route:ActivatedRoute
  ){
    this.message="";
    this.user=new User();

  }

  ngOnInit(): void {
     const store = localStorage.getItem("userProfile");
    if(store){
        this.user= JSON.parse(store) as User;
    }else {
      this.user.email=""
      this.user.password="";
    };

    this.form = new FormGroup(
      {
        email:new FormControl(this.user.email,[Validators.email,Validators.required]),
        password: new FormControl(this.user.password,[Validators.required])
      }
    )
  }

  submit():void {
    this.user.email= this.form.value['email'];
    this.user.password= this.form.value['password'];

    if(this.form.valid)
    {
      console.log(this.form);
      localStorage.setItem("userProfile",JSON.stringify(this.user));
       this.router.navigate(["/home"]);
      this.message="";
    }
    else{
      this.message="Complete los campos obligatorios"
    }
  }
  removeLocalStorage():void{
    localStorage.removeItem("userProfile");
    this.form.reset();
  }



}
