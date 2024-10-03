import { Component } from '@angular/core';
import ComposerList from '../interface/composer-list';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css'
})
export class ComposerListComponent {
  composers: ComposerList[] = [];

	name: string = '';
	popularMusic: string = '';
	genre: string = '';
	country: string = '';

	addComposer() { if (this.name,this.popularMusic,this.genre,this.country.trim())
		this.composers.push({
			name: this.name,
			popularMusic: this.popularMusic,
			genre: this.genre,
			country: this.country,
		});

		this.name = '';
		this.popularMusic = '';
		this.genre = '';
		this.country = '';
	}
}
