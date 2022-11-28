import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {


  empcode=""
  
  editEmp=()=>
{
  let Empedit:any=
  {"empcode":this.empcode}
  console.log(Empedit)
}


}
