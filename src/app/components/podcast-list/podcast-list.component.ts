import { Component } from '@angular/core';
import PodcastList from '../interface/podcast-list';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrl: './podcast-list.component.css'
})
export class PodcastListComponent {
	podcasts: PodcastList[] = [];

	name: string = '';
	host: string = '';
	genre: string = '';
	episodeNumber: number = 0;

	addPodcast() { if (this.name,this.host,this.episodeNumber,this.genre.trim())
		this.podcasts.push({
			name: this.name,
			host: this.host,
			genre: this.genre,
			episodeNumber: this.episodeNumber,
		});

		this.name = '';
		this.host = '';
		this.genre = '';
		this.episodeNumber = 0;
	}
}
