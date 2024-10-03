import { Component } from '@angular/core';
import CarModel from '../interface/car-model';

@Component({
  selector: 'app-car-model-list',
  templateUrl: './car-model-list.component.html',
  styleUrl: './car-model-list.component.css'
})
export class CarModelListComponent {
  carModels: CarModel[] = [];
  
	id: string = '';
	name: string = '';
	year: number = 0;
	make: string = '';
	model: string = '';
	price: number = 0;

	addCarModel(): void { if (this.name,this.id,this.year,this.price,this.model,this.make.trim())
		this.carModels.push({
			id: Number(this.id),
			name: this.name,
			year: this.year,
			make: this.make,
			model: this.model,
			price: this.price,
		});

		this.id = '';
		this.name = '';
		this.year = 0;
		this.make = '';
		this.model = '';
		this.price = 0;
	}
}
