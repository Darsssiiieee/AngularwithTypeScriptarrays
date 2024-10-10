import { Injectable } from '@angular/core';
import DestinationList from '../../interface/destination-list';

@Injectable({
  providedIn: 'root'
})
export class DestinationListServicesService {
  private destinations: DestinationList[] = [];

	constructor() {}

	addDestination(
		id: number,
		name: string,
		description: string,
		location: string,
	): void {
		this.destinations.push({
			id: id,
			name: name,
			description: description,
			location: location,
		});
	}

	getDestinations(): DestinationList[] {
		return this.destinations;
	}
}
