import { Component } from '@angular/core';
import AccessoryList from '../interface/accessory-list';

@Component({
  selector: 'app-accessory-list',
  templateUrl: './accessory-list.component.html',
  styleUrl: './accessory-list.component.css'
})
export class AccessoryListComponent {
  accessoryList: AccessoryList[] = [];

	name: string = '';
	description: string = '';
	type: string = '';
	price: number = 0;
	category: string = '';

	addAccessory() {if (this.name,this.description,this.type,this.price,this.category.trim())
		this.accessoryList.push({
      
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
