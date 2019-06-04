import { Component } from '@angular/core';
import { searchUrl } from './endpoint.model';
import { movie } from './movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  errMsg: string;
  page: number;
  movies: movie[];
  hasMore: boolean;
  search : string;
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
  onSubmit(e : Event ,input : HTMLInputElement) {
    e.preventDefault();
    this.initValues();
    this.search = input.value;
    this.getMovies();
  }
  async getMovies() {
    const data = await this.fetchMovies();
    data.Search ? this.loadMovies(data.Search) : this.disabledLoadMore();
  }
  async fetchMovies(){
    const url = searchUrl + `&page=${this.page}&s=${this.search}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  loadMovies(data : movie[]){
    this.movies = this.movies.concat(data);
    this.hasMore = true;
    this.page++;    
  }
  disabledLoadMore(){
    this.hasMore = false;
  }
}
