import { Component } from '@angular/core';
import DestinationList from '../interface/destination-list';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.css'
})
export class DestinationListComponent {
  destinations: DestinationList[] = [];

	id: number = 0;
	name: string = '';
	description: string = '';
	location: string = '';

	addDestination() { if (this.name,this.description,this.id,this.location.trim())
		this.destinations.push({
			id: this.id,
			name: this.name,
			description: this.description,
			location: this.location,
		});

		this.id = 0;
		this.name = '';
		this.description = '';
		this.location = '';
	}
}
