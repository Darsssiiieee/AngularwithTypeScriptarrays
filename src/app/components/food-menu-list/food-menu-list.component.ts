import { Component } from '@angular/core';
import FoodMenuList from '../interface/food-menu-list';

@Component({
  selector: 'app-food-menu-list',
  templateUrl: './food-menu-list.component.html',
  styleUrl: './food-menu-list.component.css'
})
export class FoodMenuListComponent {
  foodMenuList: FoodMenuList[] = [];

	id: number = 0;
	name: string = '';
	price: number = 0;
	description: string = '';
	rating: number = 0;

	addFoodMenu() {if (this.name,this.id,this.price,this.rating,this.description.trim())
		this.foodMenuList.push({
			id: this.id,
			name: this.name,
			price: this.price,
			description: this.description,
			rating: this.rating,
		});
		this.id = 0;
		this.name = '';
		this.price = 0;
		this.description = '';
		this.rating = 0;
	}
}
