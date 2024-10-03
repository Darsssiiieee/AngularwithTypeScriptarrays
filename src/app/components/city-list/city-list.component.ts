import { Component } from '@angular/core';
import CityList from '../interface/city-list';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {
  cities: CityList[] = [];

	id: string = '';
	name: string = '';
	country: string = '';
	population: number = 0;

	addCity(): void { if (this.name,this.country,this.population,this.id.trim())
		this.cities.push({
			id: this.id,
			name: this.name,
			country: this.country,
			population: this.population,
		});

		this.id = '';
		this.name = '';
		this.country = '';
		this.population = 0;
	}
}
