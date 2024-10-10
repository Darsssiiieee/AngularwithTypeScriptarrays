import { Component } from '@angular/core';
import GroceryList from '../interface/grocery-list';
import { GroceryListServicesService } from '../angular-services/grocery-list-service/grocery-list-services.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css'
})
export class GroceryListComponent {
	groceryList = [] as GroceryList[];
	constructor(private groceryService: GroceryListServicesService) {
		this.groceryList = this.groceryService.getGroceries();
	}

	id: number = 0;
	name: string = '';
	price: number = 0;
	description: string = '';

	addGrocery() {if (this.name,this.id,this.price,this.description.trim())
		this.groceryService.addGrocery(
			this.id,
			this.name,
			this.price,
			this.description,
		);
		this.id = 0;
		this.name = '';
		this.price = 0;
		this.description = '';
	}
}
