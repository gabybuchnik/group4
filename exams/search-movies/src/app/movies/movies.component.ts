import { Component } from '@angular/core';
import { movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  search: string;
  movies: movie[];
  page: number;
  hasMore: boolean;
  constructor(private movieService: MovieService) {
    this.search = "";
    this.movies = [];
    this.page = 1;
    this.hasMore = false;
  }

  onSubmit(e: Event, input: HTMLInputElement) {
    e.preventDefault();
    this.movieService.initValues();
    this.search = input.value;
    this.movieService.setSerachValue(this.search);
    this.renderMovies();
  }
  async renderMovies() {
    await this.movieService.getMovies();
    this.movies = this.movieService.getMoviesArr();
    this.page = this.movieService.getPage();
    this.hasMore = this.movieService.getHasMore();
  }
}
