import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {
  
  empcode=""
  
  deleteEmp=()=>
{
  let Empdelete:any=
  {"empcode":this.empcode}
  console.log(Empdelete)
}


}
