import { Component } from '@angular/core';
import LanguageList from '../interface/language-list';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.css'
})
export class LanguageListComponent {
  languages: LanguageList[] = [];

	id: string = '';
	name: string = '';
	description: string = '';
	origin: string = '';

	addLanguage(): void {if (this.name,this.id,this.description,this.origin.trim())
		this.languages.push({
			id: Number(this.id),
			name: this.name,
			description: this.description,
			origin: this.origin,
		});

		this.id = '';
		this.name = '';
		this.description = '';
		this.origin = '';
	}
}
