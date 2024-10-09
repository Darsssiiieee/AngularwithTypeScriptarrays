import { Component } from '@angular/core';
import BuildingList from '../interface/building-list';
import { BuildingListServicesService } from '../angular-services/building-list-service/building-list-services.service';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.css'
})
export class BuildingListComponent {
	buildingList = [] as BuildingList[];
	constructor(private buildingService: BuildingListServicesService) {
		this.buildingList = this.buildingService.getBuildings();
	}

	name: string = '';
	address: string = '';
	floors: number = 0;
	rooms: number = 0;
	occupants: number = 0;

	addBuilding() { if (this.name,this.floors,this.rooms,this.occupants,this.address.trim())
		this.buildingService.addBuilding(
			this.name,
			this.floors,
			this.rooms,
			this.occupants,
			this.address
		);

		this.name = '';
		this.address = '';
		this.floors = 0;
		this.rooms = 0;
		this.occupants = 0;
	}
}
