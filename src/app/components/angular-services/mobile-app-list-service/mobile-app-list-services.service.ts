import { Injectable } from '@angular/core';
import MobileAppList from '../../interface/mobile-app-list';

@Injectable({
  providedIn: 'root'
})
export class MobileAppListServicesService {
  private mobileApps: MobileAppList[] = [];

	constructor() {}

	addMobileApp(
		name: string,
		description: string,
		price: number,
		rating: number,
	): void {
		this.mobileApps.push({
			name: name,
			description: description,
			price: price,
			rating: rating,
		});
	}

	getMobileApps(): MobileAppList[] {
		return this.mobileApps;
	}
}
