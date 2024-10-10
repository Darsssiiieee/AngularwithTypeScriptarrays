import { Component } from '@angular/core';
import MovieList from '../interface/movie-list';
import { MovieListServicesService } from '../angular-services/movie-list-service/movie-list-services.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
	movies = [] as MovieList[];
	constructor(private movieService: MovieListServicesService) {
		this.movies = this.movieService.getMovies();
	}
	id: string = '';
	name: string = '';
	director: string = '';
	year: number = 0;
	rating: number = 0;

	addMovie(): void { if (this.name,this.rating,this.director,this.year,this.id.trim())
		this.movieService.addMovie(
			this.id,
			this.name,
			this.director,
			this.year,
			this.rating,
		);

		this.id = '';
		this.name = '';
		this.director = '';
		this.year = 0;
		this.rating = 0;
	}
}
