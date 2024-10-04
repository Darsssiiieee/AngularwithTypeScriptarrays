import { Component } from '@angular/core';
import TvShowList from '../interface/tv-show-list';

@Component({
  selector: 'app-tvshow-list',
  templateUrl: './tvshow-list.component.html',
  styleUrl: './tvshow-list.component.css'
})
export class TVShowListComponent {
  tvShowList: TvShowList[] = [];

	name: string = '';
	description: string = '';
	url: string = '';
	rating: number = 0;
	category: string = '';

	addTvShow() {if (this.name,this.description,this.url,this.rating,this.category.trim())
		this.tvShowList.push({
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
