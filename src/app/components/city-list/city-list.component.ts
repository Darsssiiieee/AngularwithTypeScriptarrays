import { Component } from '@angular/core';
import CityList from '../interface/city-list';
import { CityListServicesService } from '../angular-services/city-list-service/city-list-services.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {
	cities = [] as CityList[];
	constructor(private cityService: CityListServicesService) {
		this.cities = this.cityService.getCities();
	}

	id: string = '';
	name: string = '';
	country: string = '';
	population: number = 0;

	addCity(): void { if (this.name,this.country,this.population,this.id.trim())
		this.cityService.addCity(
			this.id,
			this.name,
			this.country,
			Number(this.population),
		);

		this.id = '';
		this.name = '';
		this.country = '';
		this.population = 0;
	}
}
