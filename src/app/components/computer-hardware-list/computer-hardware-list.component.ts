import { Component } from '@angular/core';
import ComputerHardware from '../interface/computer-hardware-list';

@Component({
  selector: 'app-computer-hardware-list',
  templateUrl: './computer-hardware-list.component.html',
  styleUrl: './computer-hardware-list.component.css'
})
export class ComputerHardwareListComponent {
  computerHardware: ComputerHardware[] = [];

	name: string = '';
	location: string = '';
	type: string = '';
	price: number = 0;

	addComputerHardware() { if (this.name,this.type,this.price,this.location.trim())
		this.computerHardware.push({
			name: this.name,
			location: this.location,
			type: this.type,
			price: this.price,
		});

		this.name = '';
		this.location = '';
		this.type = '';
		this.price = 0;
	}
}
