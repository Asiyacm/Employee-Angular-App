import { Component } from '@angular/core';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {


  
  empcode=""
  
  searchEmp=()=>
{
  let Empsearch:any=
  {"empcode":this.empcode}
  console.log(Empsearch)
}


}
