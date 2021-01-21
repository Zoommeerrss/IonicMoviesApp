import { Component, OnInit } from '@angular/core';

//import services
import { MovieService } from './../../services/movie.service';

//activate your routes
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.page.html',
  styleUrls: ['./movies-details.page.scss'],
})
export class MoviesDetailsPage implements OnInit {

  //this field will get the movie information 
  information = null;

  constructor(private activatedRoute: ActivatedRoute, 
              private movieService: MovieService) { }

  ngOnInit() {

    // Get the ID that was passed with the URL
    let id = this.activatedRoute.snapshot.paramMap.get('id');
 
    // Get the information from the API
    this.movieService.getDetails(id).subscribe(result => {
      this.information = result;
    });
  }

  openWebsite() {
    window.open(this.information.Website, '_blank');
  }
}
