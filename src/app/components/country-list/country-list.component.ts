import { Component } from '@angular/core';
import Country from '../interface/country-list';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {
  countries: Country[] = [];

	id: string = '';
	name: string = '';
	capital: string = '';
	population: string = '';

	addCountry(): void { if (this.name,this.id,this.population,this.capital.trim())
		this.countries.push({
			id: Number(this.id),
			name: this.name,
			capital: this.capital,
			population: Number(this.population),
		});

		this.id = '';
		this.name = '';
		this.capital = '';
		this.population = '';
	}
}
