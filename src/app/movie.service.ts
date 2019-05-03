import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export  class MovieService {
  // movies: any = [
  //   {id:1, name:'Kritika Roy',email:'kritikaroy@gmail.com', phone:'09038187690', address:"India"},
  //   {id:2, name:'Ashish Roy',email:'ashishroy@gmail.com',phone:'09038187691' ,address:"India"}
  // ];
  private movieUrl = 'http://localhost:3000/api/movies';
  private bookingUrl = 'http://localhost:3000/api/bookings';
  constructor(private http: HttpClient) { }
  
  getRemoteMovies(): Observable<[]>{
    return this.http.get<[]>(this.movieUrl); 		
  }
  deleteRemoteMovie(movie){
    return this.http.delete(this.movieUrl+"/"+movie.id); 		
  }
  getDBMovies (){
    this.http.get<[]>(this.movieUrl).subscribe((result)=>{console.log(JSON.stringify(result))});
  }
  getRemoteMovieById(id):Observable<any>{
    return this.http.get<[]>(this.movieUrl + "/"+id);
  }
  addRemoteMovie(movie):Observable<any>{
    return this.http.post(this.movieUrl,movie);
  }
  updateRemoteMovie(movie):Observable<any>{
    return this.http.put(this.movieUrl + "/"+movie.id,movie);
  }
  getRemoteBookings(): Observable<[]>{
    return this.http.get<[]>(this.bookingUrl); 		
  }
  deleteRemoteBooking(booking){
    return this.http.delete(this.bookingUrl+"/"+booking.id); 		
  }
  getDBBookings (){
    this.http.get<[]>(this.movieUrl).subscribe((result)=>{console.log(JSON.stringify(result))});
  }
  getRemoteBookingById(id):Observable<any>{
    return this.http.get<[]>(this.bookingUrl + "/"+id);
  }
  addRemoteBooking(booking):Observable<any>{
    return this.http.post(this.bookingUrl,booking);
  }
  updateRemoteBooking(booking):Observable<any>{
    return this.http.put(this.bookingUrl + "/"+booking.id,booking);
  }
}