import { Injectable } from '@angular/core';
import VideoList from '../../interface/video-list';

@Injectable({
  providedIn: 'root'
})
export class VideoListServicesService {
  private videos: VideoList[] = [];

	constructor() {}

	addVideo(
		name: string,
		description: string,
		url: string,
		rating: number,
		category: string,
	): void {
		this.videos.push({
			name: name,
			description: description,
			url: url,
			rating: rating,
			category: category,
		});
	}

	getVideos(): VideoList[] {
		return this.videos;
	}
}
