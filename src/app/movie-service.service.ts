import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from './movies';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  baseUrl="http://localhost:8080/movie/get";
  baseUrl2="http://localhost:8080/movie";
  
  constructor(private httpclient:HttpClient) { }



getALlMovies():Observable<Movies[]>{

  return this.httpclient.get<Movies[]>(this.baseUrl);


  }


  getMovieByName(movieName:string):Observable<any>{

    return this.httpclient.get(`${this.baseUrl2}/name/${movieName}`);
  }
  getMovieById(id:number):Observable<any>{

     return  this.httpclient.get(`${this.baseUrl2}/id/${id}`);
  }

  updateMovie(id:number, movie:Movies){

    return this.httpclient.put(`${this.baseUrl2}/update/${id}`, movie);
  }

  deleteMovies(id:number){
    return this.httpclient.delete(`${this.baseUrl2}/delete/${id}`);
  }
  addMovies(movie:Movies){

    return this.httpclient.post(`${this.baseUrl2}/add`,movie);

  }
}
