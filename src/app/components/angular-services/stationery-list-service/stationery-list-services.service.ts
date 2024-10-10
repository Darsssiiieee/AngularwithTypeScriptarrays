import { Injectable } from '@angular/core';
import StationeryList from '../../interface/stationery-list';

@Injectable({
  providedIn: 'root'
})
export class StationeryListServicesService {
  private stationeries: StationeryList[] = [];

	constructor() {}

	addStationery(
		id: number,
		name: string,
		price: number,
		quantity: number,
	): void {
		this.stationeries.push({
			id: id,
			name: name,
			price: price,
			quantity: quantity,
		});
	}

	getStationeries(): StationeryList[] {
		return this.stationeries;
	}
}
