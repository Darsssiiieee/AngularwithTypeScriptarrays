import { Component } from '@angular/core';
import ComputerHardware from '../interface/computer-hardware-list';
import { ComputerHardwareListServicesService } from '../angular-services/computer-hardware-list-service/computer-hardware-list-services.service';

@Component({
  selector: 'app-computer-hardware-list',
  templateUrl: './computer-hardware-list.component.html',
  styleUrl: './computer-hardware-list.component.css'
})
export class ComputerHardwareListComponent {
	computerHardware = [] as ComputerHardware[];

	constructor(
		private computerHardwareListService: ComputerHardwareListServicesService,
	) {
		this.computerHardware =
			this.computerHardwareListService.getComputerHardwares();
	}
	name: string = '';
	location: string = '';
	type: string = '';
	price: number = 0;

	addComputerHardware() { if (this.name,this.type,this.price,this.location.trim())
		this.computerHardwareListService.addComputerHardware(
			this.name,
			this.location,
			this.type,
			this.price,
		);

		this.name = '';
		this.location = '';
		this.type = '';
		this.price = 0;
	}
}
