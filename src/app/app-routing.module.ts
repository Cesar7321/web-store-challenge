import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/home/login/login.component';

const routes: Routes = [
  {
    path:"login",component:LoginComponent
  },
  {
    path:"home",component:HomeComponent,
  },
  {
    path:"",
    redirectTo:"login",
    pathMatch:"full"
  }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
