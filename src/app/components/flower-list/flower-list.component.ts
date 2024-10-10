import { Component } from '@angular/core';
import FlowerList from '../interface/flower-list';
import { FlowerListServicesService } from '../angular-services/flower-list-service/flower-list-services.service';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrl: './flower-list.component.css'
})
export class FlowerListComponent {
	flowerList = [] as FlowerList[];
	constructor(private flowerListService: FlowerListServicesService) {
		this.flowerList = this.flowerListService.getFlowers();
	}
	id: number = 0;
	name: string = '';
	description: string = '';
	price: number = 0;
	isAvailable: boolean = false;
	quantity: number = 0;

	addFlower() {if (this.name,this.id,this.price,this.quantity,this.isAvailable,this.description.trim())
		this.flowerListService.addFlower(
			this.id,
			this.name,
			this.price,
			this.quantity,
			this.description,
			this.isAvailable,
		);

		this.id = 0;
		this.name = '';
		this.description = '';
		this.price = 0;
		this.isAvailable = false;
		this.quantity = 0;
	}
}
