import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  {MovieService}  from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  list=[];
  movie:any={name:'', year:'', image_url:'', production_house:'',rating:'',type:'',language:'',date:''};
  private movieUrl = 'http://localhost:3000/api/movies';
  
  
  constructor(private movieService: MovieService,private router :Router) { }

  ngOnInit() {
    this.movieService.getDBMovies();
    this.movieService.getRemoteMovies().subscribe((result)=>{this.list=result;});
  }
  
  onEdit(id:number)
{
  this.router.navigate(['/edit',id]); 
}
  
  
  deleteMovie(movie){
    this.movieService.deleteRemoteMovie(movie).subscribe((e) => {
      this.movieService.getRemoteMovies().subscribe((result) => {this.list = result;});
    });
   // this.list = this.customerService.getCustomers();
  }
}
