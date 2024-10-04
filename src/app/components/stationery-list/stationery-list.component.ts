import { Component } from '@angular/core';
import StationeryList from '../interface/stationery-list';

@Component({
  selector: 'app-stationery-list',
  templateUrl: './stationery-list.component.html',
  styleUrl: './stationery-list.component.css'
})
export class StationeryListComponent {
  stationeryList: StationeryList[] = [];

	id: number = 0;
	name: string = '';
	quantity: number = 0;
	price: number = 0;

	addNewStationery() {if (this.id,this.quantity,this.price,this.name.trim())
		this.stationeryList.push({
			id: this.id,
			name: this.name,
			quantity: this.quantity,
			price: this.price,
		});
		this.id = 0;
		this.name = '';
		this.quantity = 0;
		this.price = 0;
	}
}
