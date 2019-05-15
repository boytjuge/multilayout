import { SettingComponent } from './backend/setting/setting.component';
import { ProfileComponent } from './backend/profile/profile.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { BacktendLayoutComponent } from './_layout/backtend-layout/backtend-layout.component';
import { ContactComponent } from './fontend/contact/contact.component';
import { ServiceComponent } from './fontend/service/service.component';
import { AboutComponent } from './fontend/about/about.component';
import { FontendLayoutComponent } from './_layout/fontend-layout/fontend-layout.component';
import { HomeComponent } from './fontend/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const brand:string = 'CodingByamp'

const routes: Routes = [
  //frontend Routing
{
  path:'',  component:FontendLayoutComponent,
  children:[
    {path:'' , component:HomeComponent,pathMatch:'full'},
    {path:'about' , component:AboutComponent,data:{title:'About'+brand}},
    {path:'service' , component:ServiceComponent,data:{title:'Service'+brand}},
    {path:'contact' , component:ContactComponent,data:{title:'Contact'+brand}}
  ]
},
  //backend Routing
  {
    path:'backend',  component:BacktendLayoutComponent,
    children:[
      {path:'dashboard' , component:DashboardComponent},
      {path:'profile' , component:ProfileComponent},
      {path:'setting' , component:SettingComponent}
    ]
  },
//Not found URL route
{
  path:'**',  redirectTo:'',

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }