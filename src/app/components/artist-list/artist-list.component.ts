import { Component } from '@angular/core';
import ArtistList from '../interface/artist-list';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.css'
})
export class ArtistListComponent {
  artistList: ArtistList[] = [];

	name: string = '';
	field: string = '';
	genre: string = '';
	country: string = '';

	addArtist() { if (this.name,this.field,this.genre,this.country.trim())
		this.artistList.push({
			name: this.name,
			field: this.field,
			genre: this.genre,
			country: this.country,
		});
		this.name = '';
		this.field = '';
		this.genre = '';
		this.country = '';
	}
}
