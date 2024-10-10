import { Component } from '@angular/core';
import VideoList from '../interface/video-list';
import { VideoListServicesService } from '../angular-services/video-list-service/video-list-services.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.css'
})
export class VideoListComponent {
	videoList = [] as VideoList[];
	constructor(private videoService: VideoListServicesService) {
		this.videoList = this.videoService.getVideos();
	}
	name: string = '';
	description: string = '';
	url: string = '';
	rating: number = 0;
	category: string = '';

	addVideo() { if (this.name,this.description,this.url,this.rating,this.category.trim())
		this.videoService.addVideo(
			this.name,
			this.description,
			this.url,
			this.rating,
			this.category,
		);
		this.name = '';
		this.description = '';
		this.url = '';
		this.rating = 0;
		this.category = '';
	}
}
