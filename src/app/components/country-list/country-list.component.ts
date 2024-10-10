import { Component } from '@angular/core';
import Country from '../interface/country-list';
import { CountryListServicesService } from '../angular-services/country-list-service/country-list-services.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {
	countries = [] as Country[];
	constructor(private countryListService: CountryListServicesService) {
		this.countries = this.countryListService.getCountries();
	}

	id: number = 0;
	name: string = '';
	capital: string = '';
	population: number = 0;

	addCountry(): void { if (this.name,this.id,this.population,this.capital.trim())
		this.countryListService.addCountry(
			this.id,
			this.name,
			this.capital,
			this.population,
		);

		this.id = 0;
		this.name = '';
		this.capital = '';
		this.population = 0;
	}
}
