import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { searchUrl } from './endpoint.model';
import { movie } from './movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valid: boolean;
  errMsg: string;
  page: number;
  movies: movie[];
  numberOfPages: number;
  loadMoreBtn: boolean;
  hasMore: boolean;
  constructor() {
    this.valid = false;
    this.errMsg = "";
    this.page = 1;
    this.movies = [];
    this.numberOfPages = 0;
    this.loadMoreBtn = false;
    this.hasMore = null;
  }
  onSubmit(f: NgForm) {
    this.movies = [];
    this.loadMoreBtn = false;
    if (f.valid && f.value.search !== "" && f.value.search !== null && f.value.search !== undefined) {
      this.valid = true;
      this.getMovies(f.value.search, this.loadMoreBtn);
    }
    else {
      this.valid = false;
      this.errMsg = "insert at least 3 letters";
    }
  }
  async getMovies(value: string, loadMore: boolean) {
    if (!loadMore) {
      this.movies = [];
      this.page = 1;
    }
    const url = searchUrl + `&page=${this.page}&s=${value}`;
    const response = await fetch(url);
    const data = await response.json();
    this.movies = this.movies.concat(data.Search);
    this.numberOfPages = Math.ceil(data.totalResults / 10);
    if (this.page === this.numberOfPages) {
      this.hasMore = false;
    }
    else {
      this.hasMore = true;
    }
    console.log(this.hasMore);
  }
  loadMore(f: NgForm) {
    this.page++;
    this.loadMoreBtn = true;
    this.getMovies(f.value.search, this.loadMoreBtn);

  }
}
