import { Injectable } from '@angular/core';
import ComputerHardware from '../../interface/computer-hardware-list';

@Injectable({
  providedIn: 'root'
})
export class ComputerHardwareListServicesService {
  private computerHardwares: ComputerHardware[] = [];

	constructor() {}

	addComputerHardware(
		name: string,
		location: string,
		type: string,
		price: number,
	): void {
		this.computerHardwares.push({
			name: name,
			location: location,
			type: type,
			price: price,
		});
	}

	getComputerHardwares(): ComputerHardware[] {
		return this.computerHardwares;
	}
}
