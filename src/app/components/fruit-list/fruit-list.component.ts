import { Component } from '@angular/core';
import FruitList from '../interface/fruit-list';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.css'
})
export class FruitListComponent {
	fruits: FruitList[] = [];

	id: string = '';
	name: string = '';
	quantity: number = 0;
	price: number = 0;

	addFruit(): void { if (this.name,this.quantity,this.price,this.id.trim())
		this.fruits.push({
			id: this.id,
			name: this.name,
			quantity: this.quantity,
			price: this.price,
		});

		this.id = '';
		this.name = '';
		this.quantity = 0;
		this.price = 0;
	}
}
