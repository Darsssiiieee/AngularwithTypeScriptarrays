import { Component } from '@angular/core';
import Sports from '../interface/sports-list';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrl: './sports-list.component.css'
})
export class SportsListComponent {
  sports: Sports[] = [];

	id: string = '';
	name: string = '';
	team: string = '';

	addSport(): void { if (this.name,this.team,this.id.trim())
		this.sports.push({
			id: Number(this.id),
			name: this.name,
			team: this.team,
		});

		this.id = '';
		this.name = '';
		this.team = '';
	}

}
