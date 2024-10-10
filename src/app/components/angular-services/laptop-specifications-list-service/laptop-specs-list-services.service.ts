import { Injectable } from '@angular/core';
import LaptopSpecs from '../../interface/laptop-specs-list';

@Injectable({
  providedIn: 'root'
})
export class LaptopSpecsListServicesService {
	addLaptop(model: string, arg0: { model: string; specs: { processor: string; ram: string; storage: string; display: string; graphics: string; }; }, p0: any) {
		throw new Error('Method not implemented.');
	}
  private laptopSpecs: LaptopSpecs[] = [];

	constructor() {}

	addLaptopSpecs(
		model: string,
		processor: string,
		ram: string,
		storage: string,
		display: string,
		graphics: string,
	): void {
		this.laptopSpecs.push({
			model: model,
			specs: {
				processor: processor,
				ram: ram,
				storage: storage,
				display: display,
				graphics: graphics,
			},
		});
	}

	getLaptopSpecs(): LaptopSpecs[] {
		return this.laptopSpecs;
	}
}
