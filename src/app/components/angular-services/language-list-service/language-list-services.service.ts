import { Injectable } from '@angular/core';
import LanguageList from '../../interface/language-list';

@Injectable({
  providedIn: 'root'
})
export class LanguageListServicesService {
  private languages: LanguageList[] = [];

	constructor() {}

	addLanguage(
		id: number,
		name: string,
		description: string,
		origin: string,
	): void {
		this.languages.push({
			id: id,
			name: name,
			description: description,
			origin: origin,
		});
	}

	getLanguages(): LanguageList[] {
		return this.languages;
	}
}
