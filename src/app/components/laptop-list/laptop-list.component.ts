import { Component } from '@angular/core';
import LaptopList from '../interface/laptop-list';
import { LaptopListServicesService } from '../angular-services/laptop-list-service/laptop-list-services.service';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrl: './laptop-list.component.css'
})
export class LaptopListComponent {
	laptops = [] as LaptopList[];

	constructor(private laptopService: LaptopListServicesService) {
		this.laptops = this.laptopService.getLaptops();
	}

	id: number = 0;
	model: string = '';
	brand: string = '';
	price: number = 0;
	processor: string = '';
	ram: string = '';
	storage: string = '';
	display: string = '';
	graphics: string = '';

	addLaptop() { if (this.id,this.model,this.brand,this.price,this.processor,this.ram,this.storage,this.display,this.graphics.trim())
		this.laptopService.addLaptop(
			this.id,
			this.model,
			this.brand,
			this.price,
			this.processor,
			this.ram,
			this.storage,
			this.display,
			this.graphics,
		);
		this.id = 0;
		this.model = '';
		this.brand = '';
		this.price = 0;
		this.processor = '';
		this.ram = '';
		this.storage = '';
		this.display = '';
		this.graphics = '';
	}
}
