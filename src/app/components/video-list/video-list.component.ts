import { Component } from '@angular/core';
import VideoList from '../interface/video-list';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.css'
})
export class VideoListComponent {
  videoList: VideoList[] = [];

	name: string = '';
	description: string = '';
	url: string = '';
	rating: number = 0;
	category: string = '';

	addVideo() { if (this.name,this.description,this.url,this.rating,this.category.trim())
		this.videoList.push({
			name: this.name,
			description: this.description,
			url: this.url,
			rating: this.rating,
			category: this.category,
		});
		this.name = '';
		this.description = '';
		this.url = '';
		this.rating = 0;
		this.category = '';
	}
}
