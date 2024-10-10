import { Component } from '@angular/core';
import Vegetables from '../interface/vegetables-list';
import { VegetablesListServicesService } from '../angular-services/vegetable-list-service/vegetables-list-services.service';

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {
	vegetables = [] as Vegetables[];
	constructor(private vegetableListService: VegetablesListServicesService) {
		this.vegetables = this.vegetableListService.getVegetables();
	}

	id: number = 0;
	name: string = '';
	price: number = 0;

	addVegetable(): void { if (this.price,this.id,this.name.trim())
		this.vegetableListService.addVegetable(this.id, this.name, this.price);

		this.id = 0;
		this.name = '';
		this.price = 0;
	}
}
