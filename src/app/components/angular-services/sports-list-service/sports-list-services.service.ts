import { Injectable } from '@angular/core';
import Sports from '../../interface/sports-list';

@Injectable({
  providedIn: 'root'
})
export class SportsListServicesService {
	private sports: Sports[] = [];

	constructor() {}

	addSport(id: number, name: string, team: string): void {
		this.sports.push({
			id: id,
			name: name,
			team: team,
		});
	}

	getSports(): Sports[] {
		return this.sports;
	}
}
