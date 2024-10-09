import { Component } from '@angular/core';
import ComposerList from '../interface/composer-list';
import { ComposerListServicesService } from '../angular-services/composer-list-service/composer-list-services.service';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css'
})
export class ComposerListComponent {
	composers = [] as ComposerList[];
	constructor(private composerService: ComposerListServicesService) {
		this.composers = this.composerService.getComposers();
	}
	name: string = '';
	popularMusic: string = '';
	genre: string = '';
	country: string = '';

	addComposer() { if (this.name,this.popularMusic,this.genre,this.country.trim())
		this.composerService.addComposer(
			this.name,
			this.popularMusic,
			this.genre,
			this.country,
		);

		this.name = '';
		this.popularMusic = '';
		this.genre = '';
		this.country = '';
	}
}
