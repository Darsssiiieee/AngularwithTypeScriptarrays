import { Component } from '@angular/core';
import PresentationList from '../interface/presentation-list';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrl: './presentation-list.component.css'
})
export class PresentationListComponent {
  presentations: PresentationList[] = [];

	topic: string = '';
	presenter: string = '';
	date: string = '';
	time: string = '';

	addPresentation() { if (this.topic,this.time,this.date,this.presenter.trim())
		this.presentations.push({
			topic: this.topic,
			presenter: this.presenter,
			date: this.date,
			time: this.time,
		});

		this.topic = '';
		this.presenter = '';
		this.date = '';
		this.time = '';
	}
}
