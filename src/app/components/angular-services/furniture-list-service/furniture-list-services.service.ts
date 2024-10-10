import { Injectable } from '@angular/core';
import FurnitureList from '../../interface/furniture-list';

@Injectable({
  providedIn: 'root'
})
export class FurnitureListServicesService {
  private furnitures: FurnitureList[] = [];
	constructor() {}

	addFurniture(
		name: string,
		description: string,
		type: string,
		price: number,
		category: string,
	): void {
		this.furnitures.push({
			name: name,
			description: description,
			type: type,
			price: price,
			category: category,
		});
	}

	getFurnitures(): FurnitureList[] {
		return this.furnitures;
	}
}
