import { Injectable } from '@angular/core';
import ArtistList from '../../interface/artist-list';

@Injectable({
  providedIn: 'root'
})
export class ArtistListServicesService {
  private artists: ArtistList[] = [];
  
	constructor() {}
	addArtist(
		name: string,
		field: string,
		genre: string,
		country: string,
	): void {
		this.artists.push({
			name: name,
			field: field,
			genre: genre,
			country: country,
		});
	}
	getArtists(): ArtistList[] {
		return this.artists;
	}
}
