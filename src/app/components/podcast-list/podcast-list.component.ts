import { Component } from '@angular/core';
import PodcastList from '../interface/podcast-list';
import { PodcastListServicesService } from '../angular-services/podcast-list-service/podcast-list-services.service';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrl: './podcast-list.component.css'
})
export class PodcastListComponent {
	podcasts = [] as PodcastList[];
	constructor(private podcastService: PodcastListServicesService) {
		this.podcasts = this.podcastService.getPodcasts();
	}

	name: string = '';
	host: string = '';
	genre: string = '';
	episodeNumber: number = 0;

	addPodcast() { if (this.name,this.host,this.episodeNumber,this.genre.trim())
		this.podcastService.addPodcast(
			this.name,
			this.host,
			this.genre,
			this.episodeNumber,
		);

		this.name = '';
		this.host = '';
		this.genre = '';
		this.episodeNumber = 0;
	}
}
