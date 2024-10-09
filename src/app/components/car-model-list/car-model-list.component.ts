import { Component } from '@angular/core';
import CarModel from '../interface/car-model';
import { CarModelListServicesService } from '../angular-services/car-model-list-service/car-model-list-services.service';

@Component({
  selector: 'app-car-model-list',
  templateUrl: './car-model-list.component.html',
  styleUrl: './car-model-list.component.css'
})
export class CarModelListComponent {
	carModels = [] as CarModel[];
	constructor(private carModelService: CarModelListServicesService) {
		this.carModels = this.carModelService.getCarModels();
	}
	id: number = 0;
	name: string = '';
	year: number = 0;
	make: string = '';
	model: string = '';
	price: number = 0;

	addCarModel(): void { if (this.name,this.id,this.year,this.price,this.model,this.make.trim())
		this.carModelService.addCarModel(
			this.id,
			this.name,
			this.year,
			this.make,
			this.model,
			this.price,
		);

		this.id = 0;
		this.name = '';
		this.year = 0;
		this.make = '';
		this.model = '';
		this.price = 0;
	}
}
