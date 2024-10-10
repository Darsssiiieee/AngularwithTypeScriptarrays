import { Component } from '@angular/core';
import Sports from '../interface/sports-list';
import { SportsListServicesService } from '../angular-services/sports-list-service/sports-list-services.service';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrl: './sports-list.component.css'
})
export class SportsListComponent {
	sports = [] as Sports[];
	constructor(private sportsService: SportsListServicesService) {
		this.sports = this.sportsService.getSports();
	}
	id: number = 0;
	name: string = '';
	team: string = '';

	addSport(): void { if (this.name,this.id,this.team.trim())
		this.sportsService.addSport(this.id, this.name, this.team);

		this.id = 0;
		this.name = '';
		this.team = '';
	}

}
