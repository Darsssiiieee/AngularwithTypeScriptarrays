import { Component } from '@angular/core';
import TvShowList from '../interface/tv-show-list';
import { TvShowListServicesService } from '../angular-services/tvshow-list-service/tv-show-list-services.service';

@Component({
  selector: 'app-tvshow-list',
  templateUrl: './tvshow-list.component.html',
  styleUrl: './tvshow-list.component.css'
})
export class TVShowListComponent {
	tvShowList = [] as TvShowList[];
	constructor(private tvShowService: TvShowListServicesService) {
		this.tvShowList = this.tvShowService.getTvShows();
	}

	name: string = '';
	description: string = '';
	url: string = '';
	rating: number = 0;
	category: string = '';

	addTvShow() {if (this.name,this.description,this.url,this.rating,this.category.trim())
		this.tvShowService.addTvShow(
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
