import { Component } from '@angular/core';
import LanguageList from '../interface/language-list';
import { LanguageListServicesService } from '../angular-services/language-list-service/language-list-services.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.css'
})
export class LanguageListComponent {
	languageList = [] as LanguageList[];
	constructor(private languageService: LanguageListServicesService) {
		this.languageList = this.languageService.getLanguages();
	}

	id: number = 0;
	name: string = '';
	description: string = '';
	origin: string = '';

	addLanguage(): void {if (this.name,this.id,this.description,this.origin.trim())
		this.languageService.addLanguage(
			this.id,
			this.name,
			this.description,
			this.origin,
		);

		this.id = 0;
		this.name = '';
		this.description = '';
		this.origin = '';
	}
}
