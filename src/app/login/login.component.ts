import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userservice: UserService,private router : Router,private route :ActivatedRoute) { }
  model ={
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  ngOnInit() {

    if(this.userservice.isLoggedIn())
    this.router.navigate(['sing-up']);
  }
  onSubmit(form : NgForm){
    
      this.userservice.login(form.value).subscribe(
        res => {
          console.log('--------------->',form.value)
          this.userservice.setToken(res['token']);
          this.router.navigate(['hotel']);
        },
        err => {
          this.serverErrorMessages = err.error.message;
        }
      );
    }
  
}