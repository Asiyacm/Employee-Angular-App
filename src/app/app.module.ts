import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule } from '@angular/forms';


const myRoute: Routes=[
  {
    path: "",
    component:AdminLoginComponent
  },
  {
    path: "add",
    component:AddEmployeeComponent
  },
  {
    path: "view",
    component:ViewEmployeeComponent
  },
  {
    path: "search",
    component:SearchEmployeeComponent
  },
  {
    path: "edit",
    component:EditEmployeeComponent
  },
  {
    path: "delete",
    component:DeleteEmployeeComponent
  },

]


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddEmployeeComponent,
    SearchEmployeeComponent,
    ViewEmployeeComponent,
    DeleteEmployeeComponent,
    EditEmployeeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
