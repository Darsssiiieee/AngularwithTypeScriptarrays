import { Injectable } from '@angular/core';
import TvShowList from '../../interface/tv-show-list';

@Injectable({
  providedIn: 'root'
})
export class TvShowListServicesService {
	private tvShows: TvShowList[] = [];

	constructor() {}

	addTvShow(
		name: string,
		description: string,
		url: string,
		rating: number,
		category: string,
	): void {
		this.tvShows.push({
			name: name,
			description: description,
			url: url,
			rating: rating,
			category: category,
		});
	}

	getTvShows(): TvShowList[] {
		return this.tvShows;
	}
}
