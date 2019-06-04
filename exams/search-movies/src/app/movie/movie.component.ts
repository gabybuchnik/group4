import { Component, OnInit, Input } from '@angular/core';
import { movie } from '../movie.model';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie : movie;
  details : string[];
  constructor(private movieService: MovieService) { 
    this.details = [];
  }

  ngOnInit() {
  }
  async clickImg(imdbId : string){
    this.details = await this.movieService.fetchMoviesDetails(imdbId);
  }
}
