import { Component } from '@angular/core';
import ToolList from '../interface/tool-list';
import { ToolListServicesService } from '../angular-services/tool-list-service/tool-list-services.service';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrl: './tool-list.component.css'
})
export class ToolListComponent {
	tools = [] as ToolList[];
	constructor(private toolService: ToolListServicesService) {
		this.tools = this.toolService.getTools();
	}

	id: number = 0;
	name: string = '';
	description: string = '';
	price: number = 0;
	quantity: number = 0;

	addTool(): void { if (this.name,this.id,this.price,this.quantity,this.description.trim())
		this.toolService.addTool(
			this.id,
			this.name,
			this.description,
			this.price,
			this.quantity,
		);

		this.id = 0;
		this.name = '';
		this.description = '';
		this.price = 0;
		this.quantity = 0;
	}
}
