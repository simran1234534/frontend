import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import{AuthInterceptor}from'./auth.interceptor';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';
import { AtmsComponent } from './atms/atms.component';
import{SignUpComponent} from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { HotellistComponent } from './hotellist/hotellist.component';
const routes:Routes=[
  {
    path:'hotel',
component:HotelComponent,
children:[
  {
  path:'atms',
  component:AtmsComponent
},

{
  path:'hotellist',
  component:HotellistComponent
}

]

},

{
  path:'login',
  component:LoginComponent
},
{
  path:'',
  component:SignUpComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
   
 
    LoginComponent,
    HotellistComponent,
    HotelComponent,
 
    AtmsComponent,  SignUpComponent, HotellistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule ,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard,
    UserService,
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true},
    {provide: LocationStrategy,
    useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
