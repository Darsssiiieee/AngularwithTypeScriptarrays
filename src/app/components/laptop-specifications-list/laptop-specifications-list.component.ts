import { Component } from '@angular/core';
import LaptopSpecs from '../interface/laptop-specs-list';
import { LaptopSpecsListServicesService } from '../angular-services/laptop-specifications-list-service/laptop-specs-list-services.service';

@Component({
  selector: 'app-laptop-specifications-list',
  templateUrl: './laptop-specifications-list.component.html',
  styleUrl: './laptop-specifications-list.component.css'
})
export class LaptopSpecificationsListComponent {
	laptops = [] as LaptopSpecs[];

	constructor(private laptopService: LaptopSpecsListServicesService) {
		this.laptops = this.laptopService.getLaptopSpecs();
	}

	model: string = '';
	processor: string = '';
	ram: string = '';
	storage: string = '';
	display: string = '';
	graphics: string = '';

	addLaptop() {if (this.model,this.processor,this.ram,this.storage,this.display,this.graphics.trim())
		this.laptops.push({
			model: this.model,
			specs: {
				processor: this.processor,
				ram: this.ram,
				storage: this.storage,
				display: this.display,
				graphics: this.graphics,
			},
		});
		this.model = '';
		this.processor = '';
		this.ram = '';
		this.storage = '';
		this.display = '';
		this.graphics = '';
	}
}
