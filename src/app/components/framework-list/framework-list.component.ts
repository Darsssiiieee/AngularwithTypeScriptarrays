import { Component } from '@angular/core';
import FrameworkList from '../interface/framework-list';
import { FrameworkListServicesService } from '../angular-services/framework-list-service/framework-list-services.service';

@Component({
  selector: 'app-framework-list',
  templateUrl: './framework-list.component.html',
  styleUrl: './framework-list.component.css'
})
export class FrameworkListComponent {
	frameworks = [] as FrameworkList[];
	constructor(private frameworkService: FrameworkListServicesService) {
		this.frameworks = this.frameworkService.getFrameworks();
	}


	name: string = '';
	description: string = '';
	developedBy: string = '';
	firstRelease: string = '';
	latestRelease: string = '';

	addFramework() { if (this.name,this.description,this.developedBy,this.firstRelease,this.latestRelease.trim())
		this.frameworkService.addFramework(
			this.name,
			this.description,
			this.developedBy,
			this.firstRelease,
			this.latestRelease,
		);

		this.name = '';
		this.description = '';
		this.developedBy = '';
		this.firstRelease = '';
		this.latestRelease = '';
	}
}
