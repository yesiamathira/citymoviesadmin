import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetComponent } from './forget/forget.component';
import { BookingComponent } from './booking/booking.component';
import { BookingdoneComponent } from './bookingdone/bookingdone.component';
import { HttpClientModule }    from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../app/material.module';
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    LoginComponent,
    MovieComponent,
    RegistrationComponent,
    ForgetComponent,
    BookingComponent,
    BookingdoneComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    CustomMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
