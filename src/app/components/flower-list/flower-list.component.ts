import { Component } from '@angular/core';
import FlowerList from '../interface/flower-list';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrl: './flower-list.component.css'
})
export class FlowerListComponent {
	flowerList: FlowerList[] = [];

	id: number = 0;
	name: string = '';
	description: string = '';
	price: number = 0;
	isAvailable: boolean = false;
	quantity: number = 0;

	addFlower() {if (this.name,this.id,this.price,this.quantity,this.isAvailable,this.description.trim())
		this.flowerList.push({
			id: this.id,
			name: this.name,
			description: this.description,
			price: this.price,
			isAvailable: Boolean(this.isAvailable),
			quantity: this.quantity,
		});

		this.id = 0;
		this.name = '';
		this.description = '';
		this.price = 0;
		this.isAvailable = false;
		this.quantity = 0;
	}
}
