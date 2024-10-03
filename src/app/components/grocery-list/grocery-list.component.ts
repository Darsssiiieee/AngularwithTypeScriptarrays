import { Component } from '@angular/core';
import GroceryList from '../interface/grocery-list';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css'
})
export class GroceryListComponent {
  groceryList: GroceryList[] = [];

	id: number = 0;
	name: string = '';
	price: number = 0;
	description: string = '';

	addGrocery() {if (this.name,this.id,this.price,this.description.trim())
		this.groceryList.push({
			id: this.id,
			name: this.name,
			price: this.price,
			description: this.description,
		});
		this.id = 0;
		this.name = '';
		this.price = 0;
		this.description = '';
	}
}
