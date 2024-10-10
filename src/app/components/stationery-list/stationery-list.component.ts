import { Component } from '@angular/core';
import StationeryList from '../interface/stationery-list';
import { StationeryListServicesService } from '../angular-services/stationery-list-service/stationery-list-services.service';

@Component({
  selector: 'app-stationery-list',
  templateUrl: './stationery-list.component.html',
  styleUrl: './stationery-list.component.css'
})
export class StationeryListComponent {
	stationeryList = [] as StationeryList[];
	constructor(private stationeryListService: StationeryListServicesService) {
		this.stationeryList = this.stationeryListService.getStationeries();
	}

	id: number = 0;
	name: string = '';
	quantity: number = 0;
	price: number = 0;

	addNewStationery() {if (this.id,this.quantity,this.price,this.name.trim())
		this.stationeryListService.addStationery(
			this.id,
			this.name,
			this.quantity,
			this.price,
		);
		this.id = 0;
		this.name = '';
		this.quantity = 0;
		this.price = 0;
	}
}
