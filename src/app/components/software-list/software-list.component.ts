import { Component } from '@angular/core';
import SoftwareList from '../interface/software-list';
import { SoftwareListServicesService } from '../angular-services/software-list-service/software-list-services.service';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrl: './software-list.component.css'
})
export class SoftwareListComponent {
	softwareList = [] as SoftwareList[];
	constructor(private softwareListService: SoftwareListServicesService) {
		this.softwareList = this.softwareListService.getSoftware();
	}
	id: number = 0;
	name: string = '';
	description: string = '';
	platform: string = '';

	addSoftware(): void { if (this.name,this.id,this.description,this.platform.trim())
		this.softwareListService.addSoftware(
			this.id,
			this.name,
			this.description,
			this.platform,
		);

		this.id = 0;
		this.name = '';
		this.description = '';
		this.platform = '';
	}
}
