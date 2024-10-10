import { Component } from '@angular/core';
import FurnitureList from '../interface/furniture-list';
import { FurnitureListServicesService } from '../angular-services/furniture-list-service/furniture-list-services.service';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrl: './furniture-list.component.css'
})
export class FurnitureListComponent {
	furnitureList = [] as FurnitureList[];
	constructor(private furnitureService: FurnitureListServicesService) {
		this.furnitureList = this.furnitureService.getFurnitures();
	}

	name: string = '';
	description: string = '';
	type: string = '';
	price: number = 0;
	category: string = '';

	addFurniture() { if (this.name,this.price,this.type,this.category,this.description.trim())
		this.furnitureService.addFurniture(
			this.name,
			this.description,
			this.type,
			this.price,
			this.category,
		);
		this.name = '';
		this.description = '';
		this.type = '';
		this.price = 0;
		this.category = '';
	}
}
