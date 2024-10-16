import { Injectable } from '@angular/core';
import FoodMenuList from '../../interface/food-menu-list';

@Injectable({
  providedIn: 'root'
})
export class FoodMenuListServicesService {
  private foodMenus: FoodMenuList[] = [];

	constructor() {}

	addFoodMenu(
		id: number,
		name: string,
		price: number,
		description: string,
		rating: number,
	): void {
		this.foodMenus.push({
			id: id,
			name: name,
			price: price,
			description: description,
			rating: rating,
		});
	}

	getFoodMenus(): FoodMenuList[] {
		return this.foodMenus;
	}
}
