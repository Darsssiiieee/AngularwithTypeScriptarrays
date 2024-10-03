import { Component } from '@angular/core';
import FrameworkList from '../interface/framework-list';

@Component({
  selector: 'app-framework-list',
  templateUrl: './framework-list.component.html',
  styleUrl: './framework-list.component.css'
})
export class FrameworkListComponent {
  frameworks: FrameworkList[] = [];

	name: string = '';
	description: string = '';
	developedBy: string = '';
	firstRelease: string = '';
	latestRelease: string = '';

	addFramework() { if (this.name,this.description,this.developedBy,this.firstRelease,this.latestRelease.trim())
		this.frameworks.push({
			name: this.name,
			description: this.description,
			developedBy: this.developedBy,
			firstRelease: this.firstRelease,
			latestRelease: this.latestRelease,
		});

		this.name = '';
		this.description = '';
		this.developedBy = '';
		this.firstRelease = '';
		this.latestRelease = '';
	}
}
