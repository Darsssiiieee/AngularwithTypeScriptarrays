import { Component } from '@angular/core';
import PresentationList from '../interface/presentation-list';
import { PresentationListServicesService } from '../angular-services/presentation-list-service/presentation-list-services.service';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrl: './presentation-list.component.css'
})
export class PresentationListComponent {
	presentations = [] as PresentationList[];
	constructor(private presentationService: PresentationListServicesService) {
		this.presentations = this.presentationService.getPresentations();
	}

	topic: string = '';
	presenter: string = '';
	date: string = '';
	time: string = '';

	addPresentation() { if (this.topic,this.time,this.date,this.presenter.trim())
		this.presentationService.addPresentation(
			this.topic,
			this.presenter,
			this.date,
			this.time,
		);

		this.topic = '';
		this.presenter = '';
		this.date = '';
		this.time = '';
	}
}
