import { Injectable } from '@angular/core';
import PodcastList from '../../interface/podcast-list';

@Injectable({
  providedIn: 'root'
})
export class PodcastListServicesService {
  private podcasts: PodcastList[] = [];

	constructor() {}

	addPodcast(
		name: string,
		host: string,
		genre: string,
		episodeNumber: number,
	): void {
		this.podcasts.push({
			name: name,
			host: host,
			genre: genre,
			episodeNumber: episodeNumber,
		});
	}

	getPodcasts(): PodcastList[] {
		return this.podcasts;
	}
}
