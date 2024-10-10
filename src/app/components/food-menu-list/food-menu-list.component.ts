import { Component } from '@angular/core';
import FoodMenuList from '../interface/food-menu-list';
import { FoodMenuListServicesService } from '../angular-services/food-menu-list-service/food-menu-list-services.service';

@Component({
  selector: 'app-food-menu-list',
  templateUrl: './food-menu-list.component.html',
  styleUrl: './food-menu-list.component.css'
})
export class FoodMenuListComponent {
	foodMenuList = [] as FoodMenuList[];
	constructor(private foodMenuService: FoodMenuListServicesService) {
		this.foodMenuList = this.foodMenuService.getFoodMenus();
	}

	id: number = 0;
	name: string = '';
	price: number = 0;
	description: string = '';
	rating: number = 0;

	addFoodMenu() {if (this.name,this.id,this.price,this.rating,this.description.trim())
		this.foodMenuService.addFoodMenu(
			this.id,
			this.name,
			this.price,
			this.description,
			this.rating,
		);
		this.id = 0;
		this.name = '';
		this.price = 0;
		this.description = '';
		this.rating = 0;
	}
}
