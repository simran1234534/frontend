import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-hotellist',
  templateUrl: './hotellist.component.html',
  styleUrls: ['./hotellist.component.css']
})
export class HotellistComponent implements OnInit {
  userdata: any = []
  checkdetail: any;
  public isVisible: any;
  public isData: any;

  constructor(private http: HttpClient, private router: Router, private UserService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("data")
    this.UserService.getdata().subscribe(data => {
      this.userdata = data
      console.log('userdata', this.userdata.result.length);
      if (this.userdata.result.length > 0) {
        this.checkdetail = this.userdata.result[0].html_attributions;
        console.log('hoteldetails', this.checkdetail);
        console.log(this.userdata.result);
        this.isVisible=true;
        this.isData=false;
      }else{
        this.isVisible=false;
        this.isData=true;
      }
    
   
    }

      //  console.log("sucessfully claimed",this.userdata[0].result)

    
    )}

}
