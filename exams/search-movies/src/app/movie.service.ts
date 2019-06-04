import { Injectable } from '@angular/core';
import { searchUrl } from './endpoint.model';
import { movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  errMsg: string;
  page: number;
  movies: movie[];
  hasMore: boolean;
  search: string;
  constructor() {
    this.initValues();
  }
  initValues() {
    this.errMsg = "";
    this.page = 1;
    this.movies = [];
    this.hasMore = false;
    this.search = "";
  }
  setSerachValue(search: string){
    this.search = search;
  }
  async getMovies() {
    const data = await this.fetchMovies();
    data.Search ? this.loadMovies(data.Search) : this.disabledLoadMore();
  }
  async fetchMovies() {
    const url = searchUrl + `&page=${this.page}&s=${this.search}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  async fetchMoviesDetails(imdbId : string) {
    const url = searchUrl + `&i=${imdbId}`;
    const response = await fetch(url);
    const data = await response.json();
    const arr = [];
    for(let key in data){
      if(data.hasOwnProperty(key)){
        arr.push(key + ":" + data[key]);
      }
    }
    return arr;
  }
  loadMovies(data: movie[]) {
    this.movies = this.movies.concat(data);
    this.hasMore = true;
    this.page++;
  }
  disabledLoadMore() {
    this.hasMore = false;
  }
  getMoviesArr() {
    return this.movies;
  }
  getPage(){
    return this.page;
  }
  getHasMore(){
    return this.hasMore;
  }
}
