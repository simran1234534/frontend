import { Component } from '@angular/core';
import{UserService} from './user.service';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
 constructor(private userservice:UserService,private router:Router){}
 
}
