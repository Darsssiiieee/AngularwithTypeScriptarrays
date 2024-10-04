import { Component } from '@angular/core';
import SoftwareList from '../interface/software-list';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrl: './software-list.component.css'
})
export class SoftwareListComponent {
  softwareList: SoftwareList[] = [];

	id: string = '';
	name: string = '';
	description: string = '';
	platform: string = '';

	addSoftware(): void { if (this.name,this.id,this.description,this.platform.trim())
		this.softwareList.push({
			id: Number(this.id),
			name: this.name,
			description: this.description,
			platform: this.platform,
		});

		this.id = '';
		this.name = '';
		this.description = '';
		this.platform = '';
	}
}
