import { Component } from '@angular/core';
import DeveloperToolsList from '../interface/developer-tools-list';
import { DeveloperToolsListServicesService } from '../angular-services/developer-tools-list-service/developer-tools-list-services.service';

@Component({
  selector: 'app-developer-tools-list',
  templateUrl: './developer-tools-list.component.html',
  styleUrl: './developer-tools-list.component.css'
})
export class DeveloperToolsListComponent {
	developerTools = [] as DeveloperToolsList[];
	constructor(private developerToolsService: DeveloperToolsListServicesService) {
		this.developerTools = this.developerToolsService.getDeveloperTools();
	}

	toolName: string = '';
	toolDescription: string = '';
	toolPrice: number = 0;
	toolDuration: string = '';

	addDeveloperTool() { if (this.toolName,this.toolDescription,this.toolPrice,this.toolDuration.trim())
		this.developerToolsService.addDeveloperTool(
			this.toolName,
			this.toolDescription,
			this.toolPrice,
			this.toolDuration,
		);

		this.toolName = '';
		this.toolDescription = '';
		this.toolPrice = 0;
		this.toolDuration = '';
	}
}
