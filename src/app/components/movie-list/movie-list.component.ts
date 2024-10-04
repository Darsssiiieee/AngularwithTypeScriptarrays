import { Component } from '@angular/core';
import MovieList from '../interface/movie-list';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies: MovieList[] = [];

	id: string = '';
	name: string = '';
	director: string = '';
	year: number = 0;
	rating: number = 0;

	addMovie(): void { if (this.name,this.rating,this.director,this.year,this.id.trim())
		this.movies.push({
			id: this.id,
			name: this.name,
			director: this.director,
			year: this.year,
			rating: this.rating,
		});

		this.id = '';
		this.name = '';
		this.director = '';
		this.year = 0;
		this.rating = 0;
	}
}
