import { Component } from '@angular/core';
import Vegetables from '../interface/vegetables-list';

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {
  vegetables: Vegetables[] = [];

	id: string = '';
	name: string = '';
	price: string = '';

	addVegetable(): void { if (this.price,this.id,this.name.trim())
		this.vegetables.push({
			id: Number(this.id),
			name: this.name,
			price: Number(this.price),
		});

		this.id = '';
		this.name = '';
		this.price = '';
	}
}
