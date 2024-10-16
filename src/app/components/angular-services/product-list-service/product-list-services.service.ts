import { Injectable } from '@angular/core';
import Product from '../../interface/product-list';

@Injectable({
  providedIn: 'root'
})
export class ProductListServicesService {
  private products: Product[] = [];

	constructor() {}

	addProduct(
    id: number, 
    name: string, 
    price: number
  ): void {
		this.products.push({
			id: id,
			name: name,
			price: price,
		});
	}

	getProducts(): Product[] {
		return this.products;
	}
}
