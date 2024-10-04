import { Component } from '@angular/core';
import MobileAppList from '../interface/mobile-app-list';

@Component({
  selector: 'app-mobile-app-list',
  templateUrl: './mobile-app-list.component.html',
  styleUrl: './mobile-app-list.component.css'
})
export class MobileAppListComponent {
  mobileApps: MobileAppList[] = [];

	name: string = '';
	description: string = '';
	price: number = 0;
	rating: number = 0;

	addMobileApp() { if (this.name,this.price,this.rating,this.description.trim())
		this.mobileApps.push({
			name: this.name,
			description: this.description,
			price: this.price,
			rating: this.rating,
		});

		this.name = '';
		this.description = '';
		this.price = 0;
		this.rating = 0;
	}
}
