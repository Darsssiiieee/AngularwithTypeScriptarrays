import { Component } from '@angular/core';
import MobileAppList from '../interface/mobile-app-list';
import { MobileAppListServicesService } from '../angular-services/mobile-app-list-service/mobile-app-list-services.service';

@Component({
  selector: 'app-mobile-app-list',
  templateUrl: './mobile-app-list.component.html',
  styleUrl: './mobile-app-list.component.css'
})
export class MobileAppListComponent {
	mobileApps = [] as MobileAppList[];

	constructor(private mobileAppService: MobileAppListServicesService) {
		this.mobileApps = this.mobileAppService.getMobileApps();
	}

	name: string = '';
	description: string = '';
	price: number = 0;
	rating: number = 0;

	addMobileApp() { if (this.name,this.price,this.rating,this.description.trim())
		this.mobileAppService.addMobileApp(
			this.name,
			this.description,
			this.price,
			this.rating,
		);

		this.name = '';
		this.description = '';
		this.price = 0;
		this.rating = 0;
	}
}
