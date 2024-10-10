import { Component } from '@angular/core';
import FruitList from '../interface/fruit-list';
import { FruitListServicesService } from '../angular-services/fruit-list-service/fruit-list-services.service';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.css'
})
export class FruitListComponent {
	fruits = [] as FruitList[];
	constructor(private fruitService: FruitListServicesService) {
		this.fruits = this.fruitService.getFruits();
	}
	id: string = '';
	name: string = '';
	quantity: number = 0;
	price: number = 0;

	addFruit(): void { if (this.name,this.quantity,this.price,this.id.trim())
		this.fruitService.addFruit(
			this.id,
			this.name,
			this.price,
			this.quantity,
		);

		this.id = '';
		this.name = '';
		this.quantity = 0;
		this.price = 0;
	}
}
