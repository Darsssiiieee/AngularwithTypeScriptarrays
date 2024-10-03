import { Component } from '@angular/core';
import DeveloperToolsList from '../interface/developer-tools-list';

@Component({
  selector: 'app-developer-tools-list',
  templateUrl: './developer-tools-list.component.html',
  styleUrl: './developer-tools-list.component.css'
})
export class DeveloperToolsListComponent {
  developerTools: DeveloperToolsList[] = [];

	toolName: string = '';
	toolDescription: string = '';
	toolPrice: number = 0;
	toolDuration: string = '';

	addDeveloperTool() { if (this.toolName,this.toolDescription,this.toolPrice,this.toolDuration.trim())
		this.developerTools.push({
			toolName: this.toolName,
			toolDescription: this.toolDescription,
			toolPrice: this.toolPrice,
			toolDuration: this.toolDuration,
		});

		this.toolName = '';
		this.toolDescription = '';
		this.toolPrice = 0;
		this.toolDuration = '';
	}
}
