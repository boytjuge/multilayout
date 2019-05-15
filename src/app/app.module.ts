import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';

// component
import { AppComponent } from './app.component';
import { HomeComponent } from './fontend/home/home.component';
import { AboutComponent } from './fontend/about/about.component';
import { ContactComponent } from './fontend/contact/contact.component';
import { ServiceComponent } from './fontend/service/service.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { ProfileComponent } from './backend/profile/profile.component';
import { SettingComponent } from './backend/setting/setting.component';
import { FontendLayoutComponent } from './_layout/fontend-layout/fontend-layout.component';
import { BacktendLayoutComponent } from './_layout/backtend-layout/backtend-layout.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    DashboardComponent,
    ProfileComponent,
    SettingComponent,
    HomeComponent,
    FontendLayoutComponent,
    BacktendLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
