import { Component } from '@angular/core';
import InventoryList from '../interface/inventory-list';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent {
	inventoryList: InventoryList[] = [];

	id: number = 0;
	name: string = '';
	quantity: number = 0;
	price: number = 0;

	addNewInventory() { if (this.id,this.quantity,this.price,this.name.trim())
		this.inventoryList.push({
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
