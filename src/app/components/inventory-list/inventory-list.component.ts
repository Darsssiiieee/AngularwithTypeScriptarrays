import { Component } from '@angular/core';
import InventoryList from '../interface/inventory-list';
import { InventoryListServicesService } from '../angular-services/inventory-list-service/inventory-list-services.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent {
	inventoryList = [] as InventoryList[];
	constructor(private inventoryService: InventoryListServicesService) {
		this.inventoryList = this.inventoryService.getInventories();
	}

	id: number = 0;
	name: string = '';
	quantity: number = 0;
	price: number = 0;

	addNewInventory() { if (this.id,this.quantity,this.price,this.name.trim())
		this.inventoryService.addInventory(
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
