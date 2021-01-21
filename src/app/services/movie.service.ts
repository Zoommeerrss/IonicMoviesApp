import { Injectable } from '@angular/core';

//the service become a client consumer and uses an Observable pattern to use async functions
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//Config HTTP Options on header if it is necessary
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

// Typescript custom enum for search types (optional)
export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
	
  url = 'http://www.omdbapi.com/';
  // You have to ask your aow key on http://www.omdbapi.com/ providing your email
  apiKey = '21aa8f61'; 

 /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private http: HttpClient) { }
  
    /**
  * Get data from the OmdbApi 
  * map the result to return only the results that we need
  * 
  * @param {string} title Search Term
  * @param {SearchType} type movie, series, episode or empty
  * @returns Observable with the search results
  */
  searchData(title: string, type: SearchType): Observable<any> {

    console.log('searchData title: ' + type + ', type: ' + type);

    return this.http.get(this.url + '?s=' + encodeURI(title) + '&type=' + type + '&apikey=' + this.apiKey).pipe(
      map(results => results['Search'])
    );
  }
 
  /**
  * Get the detailed information for an ID using the "i" parameter
  * 
  * @param {string} id imdbID to retrieve information
  * @returns Observable with detailed information
  */
  getDetails(id: string) {

    console.log('getDetails id: ' + id);
    
    return this.http.get(this.url + '?i=' + id + '&plot=full&apikey=' + this.apiKey);
  }
}
