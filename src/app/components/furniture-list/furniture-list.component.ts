import { Component } from '@angular/core';
import FurnitureList from '../interface/furniture-list';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrl: './furniture-list.component.css'
})
export class FurnitureListComponent {
  furnitureList: FurnitureList[] = [];

	name: string = '';
	description: string = '';
	type: string = '';
	price: number = 0;
	category: string = '';

	addFurniture() { if (this.name,this.price,this.type,this.category,this.description.trim())
		this.furnitureList.push({
			name: this.name,
			description: this.description,
			type: this.type,
			price: this.price,
			category: this.category,
		});
		this.name = '';
		this.description = '';
		this.type = '';
		this.price = 0;
		this.category = '';
	}
}
