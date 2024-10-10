import { Injectable } from '@angular/core';
import BuildingList from '../../interface/building-list';

@Injectable({
  providedIn: 'root'
})
export class BuildingListServicesService {
  private buildings: BuildingList[] = [];
  
	constructor() {}
	
	addBuilding(
		name: string,
		floors: number,
		rooms: number,
		occupants: number,
    address: string,
	): void {
		this.buildings.push({
      name: name,
      floors: floors,
      rooms: rooms,
      occupants: occupants,
      address: address,
    });
	}
	getBuildings(): BuildingList[] {
		return this.buildings;
	}
}
