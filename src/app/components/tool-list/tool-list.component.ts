import { Component } from '@angular/core';
import ToolList from '../interface/tool-list';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrl: './tool-list.component.css'
})
export class ToolListComponent {
  tools: ToolList[] = [];

	id: string = '';
	name: string = '';
	description: string = '';
	price: string = '';
	quantity: string = '';

	addTool(): void { if (this.name,this.id,this.price,this.quantity,this.description.trim())
		this.tools.push({
			id: Number(this.id),
			name: this.name,
			description: this.description,
			price: Number(this.price),
			quantity: Number(this.quantity),
		});

		this.id = '';
		this.name = '';
		this.description = '';
		this.price = '';
		this.quantity = '';
	}
}
