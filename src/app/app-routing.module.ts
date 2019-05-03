import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieComponent} from './movie/movie.component';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
import {LoginComponent} from './login/login.component';
import {ForgetComponent} from './forget/forget.component';
import { RegistrationComponent} from './registration/registration.component';
import {BookingComponent} from './booking/booking.component';
import {BookingdoneComponent} from './bookingdone/bookingdone.component';

const routes: Routes = [
 {
  path:'movie',
  component: MovieComponent
 } ,
 {
  path:'add',
  component: AddComponent
 } ,
 {
  path:'edit/:id',
  component: EditComponent
 } ,
 {
  path:'login',
  component: LoginComponent
 } ,
 {
  path:'forget',
  component: ForgetComponent
 } ,
 {
  path:'registration',
  component: RegistrationComponent
 } ,
 {
  path:'booking',
  component: BookingComponent
 } ,
 {
  path:'bookingdone',
  component: BookingdoneComponent
 } ,
 {
  path:'',
  redirectTo:'/login',
  pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
