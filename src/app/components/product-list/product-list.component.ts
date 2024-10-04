import { Component } from '@angular/core';
import Product from '../interface/product-list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [];

	id: string = '';
	name: string = '';
	price: number = 0;

	addProduct(): void { if (this.id,this.price,this.name.trim())
		this.products.push({
			id: Number(this.id),
			name: this.name,
			price: this.price,
		});

		this.id = '';
		this.name = '';
		this.price = 0;
	}
}
