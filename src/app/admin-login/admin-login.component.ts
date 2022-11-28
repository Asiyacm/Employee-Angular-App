import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {


  username=""
  password=""
  
adminLogin=()=>
{
  let admin:any=
  {"name":this.username,"password":this.password}
  console.log(admin)
}



}
