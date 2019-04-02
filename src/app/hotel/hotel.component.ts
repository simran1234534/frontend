import { Component, OnInit,OnDestroy } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  
  constructor(private userService:UserService,private router: Router,private route:ActivatedRoute) { 
   
  }
  
  // ngOnDestroy(): void {
  //   this.changes.disconnect();
  // }
  logout(){
    this.userService.deleteToken();
    this.router.navigate(['login']);
  }
  hotels(){
    this.router.navigate(['./hotellist'],{relativeTo: this.route })
  }
  ngOnInit() {

  }

}
