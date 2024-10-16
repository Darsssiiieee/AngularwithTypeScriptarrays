import { Injectable } from '@angular/core';
import CityList from '../../interface/city-list';

@Injectable({
  providedIn: 'root'
})
export class CityListServicesService {
  private cities: CityList[] = [];
  
	constructor() {}
	
	addCity(
		id: string,
		name: string,
		country: string,
		population: number,
	): void {
		this.cities.push({
			id: id,
			name: name,
			country: country,
			population: population,
		});
	}
	getCities(): CityList[] {
		return this.cities;
	}
}
