import { Component, OnInit } from '@angular/core';
import  { MovieService }  from '../movie.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  private sub: any;
  movie:any;
  constructor(private movieService:MovieService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.movie = {name:'', year:'', image_url:'', production_house:'',rating:'',type:'',language:'',date:''};
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.movieService.getRemoteMovieById(this.id).subscribe((movie)=>{this.movie = movie;});
   });
  }
  updateMovie(movie){
    this.movieService.updateRemoteMovie(this.movie).subscribe(()=>{this.router.navigate(['/movie']);});
  }
}
