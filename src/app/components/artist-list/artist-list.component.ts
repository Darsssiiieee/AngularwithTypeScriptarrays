import { Component } from '@angular/core';
import ArtistList from '../interface/artist-list';
import { ArtistListServicesService } from '../angular-services/artist-list-service/artist-list-services.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.css'
})
export class ArtistListComponent {
	artistList = [] as ArtistList[];
	constructor(private artistService: ArtistListServicesService) {
		this.artistList = this.artistService.getArtists();
	}

	name: string = '';
	field: string = '';
	genre: string = '';
	country: string = '';

	addArtist() { if (this.name,this.field,this.genre,this.country.trim())
		this.artistService.addArtist(
			this.name,
			this.field,
			this.genre,
			this.country,
		);
		this.name = '';
		this.field = '';
		this.genre = '';
		this.country = '';
	}
}
