import { Injectable } from '@angular/core';
import PresentationList from '../../interface/presentation-list';

@Injectable({
  providedIn: 'root'
})
export class PresentationListServicesService {
	private presentations: PresentationList[] = [];

	constructor() {}

	addPresentation(
		topic: string,
		presenter: string,
		date: string,
		time: string,
	): void {
		this.presentations.push({
			topic: topic,
			presenter: presenter,
			date: date,
			time: time,
		});
	}

	getPresentations(): PresentationList[] {
		return this.presentations;
	}
}
