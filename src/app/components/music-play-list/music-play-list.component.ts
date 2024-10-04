import { Component } from '@angular/core';
import MusicPlayList from '../interface/music-play-list';

@Component({
  selector: 'app-music-play-list',
  templateUrl: './music-play-list.component.html',
  styleUrl: './music-play-list.component.css'
})
export class MusicPlayListComponent {
  musicPlayList: MusicPlayList[] = [];

	id: string = '';
	name: string = '';
	artist: string = '';
	album: string = '';
	duration: string = '';
	genre: string = '';
	year: string = '';

	addMusicPlayList(): void { if (this.name,this.id,this.year,this.duration,this.genre,this.album,this.artist.trim())
		this.musicPlayList.push({
			id: Number(this.id),
			name: this.name,
			artist: this.artist,
			album: this.album,
			duration: this.duration,
			genre: this.genre,
			year: this.year,
		});

		this.id = '';
		this.name = '';
		this.artist = '';
		this.album = '';
		this.duration = '';
		this.genre = '';
		this.year = '';
	}
}
