import { Component } from '@angular/core';
import DestinationList from '../interface/destination-list';
import { DestinationListServicesService } from '../angular-services/destination-list-service/destination-list-services.service';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.css'
})
export class DestinationListComponent {
	destinations = [] as DestinationList[];
	constructor(private destinationListService: DestinationListServicesService) {
		this.destinations = this.destinationListService.getDestinations();
	}

	id: number = 0;
	name: string = '';
	description: string = '';
	location: string = '';

	addDestination() { if (this.name,this.description,this.id,this.location.trim())
		this.destinationListService.addDestination(
			this.id,
			this.name,
			this.description,
			this.location,
		);

		this.id = 0;
		this.name = '';
		this.description = '';
		this.location = '';
	}
}
