import { Component } from '@angular/core';
import AccessoryList from '../interface/accessory-list';
import { AccessoryListServicesService } from '../angular-services/accessory-list-service/accessory-list-services.service';

@Component({
  selector: 'app-accessory-list',
  templateUrl: './accessory-list.component.html',
  styleUrl: './accessory-list.component.css'
})
export class AccessoryListComponent {
	accessoryList = [] as AccessoryList[];
	constructor(private accessoryService: AccessoryListServicesService) {
		this.accessoryList = this.accessoryService.getAccessories();
	}

	name: string = '';
	description: string = '';
	type: string = '';
	price: number = 0;
	category: string = '';

	addAccessory() {if (this.name,this.description,this.type,this.price,this.category.trim())
		this.accessoryService.addAccessory(
      
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
