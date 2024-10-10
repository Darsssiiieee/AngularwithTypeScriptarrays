import { Component } from '@angular/core';
import MusicPlayList from '../interface/music-play-list';
import { MusicPlayListServicesService } from '../angular-services/music-play-list-service/music-play-list-services.service';

@Component({
  selector: 'app-music-play-list',
  templateUrl: './music-play-list.component.html',
  styleUrl: './music-play-list.component.css'
})
export class MusicPlayListComponent {
	musicPlayList = [] as MusicPlayList[];
	constructor(private musicPlayListService: MusicPlayListServicesService) {
		this.musicPlayList = this.musicPlayListService.getMusicPlayList();
	}
	id: number = 0;
	name: string = '';
	artist: string = '';
	album: string = '';
	duration: number = 0;
	genre: string = '';
	year: number = 0;

	addMusicPlayList(): void { if (this.name,this.id,this.year,this.duration,this.genre,this.album,this.artist.trim())
		this.musicPlayListService.addMusicPlayList(
			this.id,
			this.name,
			this.artist,
			this.album,
			this.duration,
			this.genre,
			this.year,
		);

		this.id = 0;
		this.name = '';
		this.artist = '';
		this.album = '';
		this.duration = 0;
		this.genre = '';
		this.year = 0;
	}
}
