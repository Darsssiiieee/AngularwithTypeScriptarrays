import { Component } from '@angular/core';
import Product from '../interface/product-list';
import { ProductListServicesService } from '../angular-services/product-list-service/product-list-services.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
	products = [] as Product[];
	constructor(private productService: ProductListServicesService) {
		this.products = this.productService.getProducts();
	}
	id: number = 0;
	name: string = '';
	price: number = 0;

	addProduct(): void { if (this.id,this.price,this.name.trim())
		this.productService.addProduct(Number(this.id), this.name, this.price);
		this.id = 0;
		this.name = '';
		this.price = 0;
	}
}
