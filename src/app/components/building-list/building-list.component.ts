import { Component } from '@angular/core';
import BuildingList from '../interface/building-list';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.css'
})
export class BuildingListComponent {
  buildingList: BuildingList[] = [];

	name: string = '';
	address: string = '';
	floors: number = 0;
	rooms: number = 0;
	occupants: number = 0;

	addBuilding() { if (this.name,this.floors,this.rooms,this.occupants,this.address.trim())
		this.buildingList.push({
			name: this.name,
			address: this.address,
			floors: this.floors,
			rooms: this.rooms,
			occupants: this.occupants,
		});

		this.name = '';
		this.address = '';
		this.floors = 0;
		this.rooms = 0;
		this.occupants = 0;
	}
}
