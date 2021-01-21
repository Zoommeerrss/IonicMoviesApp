//default import
import { Component, OnInit } from '@angular/core';

//Observable as Promisse to async functions
import { Observable } from 'rxjs';

//import the services
import { MovieService, SearchType } from './../../services/movie.service';

//toast
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;
 
  /**
   * Constructor of our first page
   * @param movieService The movie Service to get data
   */
  constructor(private movieService: MovieService, private toastController: ToastController) { }
 
  ngOnInit() { }
 
  searchChanged() {
    // Call our service function which returns an Observable
    try {
      this.results = this.movieService.searchData(this.searchTerm, this.type);
    }
    catch(error) {
      this.presentToast('searchChanged: ' + error);
    }
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: 'Error: ' + msg,
      duration: 2000
    });
    toast.present();
  }
}
