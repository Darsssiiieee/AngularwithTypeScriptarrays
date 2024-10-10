import { Injectable } from '@angular/core';
import GroceryList from '../../interface/grocery-list';

@Injectable({
  providedIn: 'root'
})
export class GroceryListServicesService {
  private groceries: GroceryList[] = [];

	constructor() {}

	addGrocery(
		id: number,
		name: string,
		price: number,
		description: string,
	): void {
		this.groceries.push({
			id: id,
			name: name,
			price: price,
			description: description,
		});
	}

	getGroceries(): GroceryList[] {
		return this.groceries;
	}
}
