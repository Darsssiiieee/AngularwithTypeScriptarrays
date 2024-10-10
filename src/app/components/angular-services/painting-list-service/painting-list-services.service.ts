import { Injectable } from '@angular/core';
import PaintingList from '../../interface/painting-list';

@Injectable({
  providedIn: 'root'
})
export class PaintingListServicesService {
  private paintings: PaintingList[] = [];

	constructor() {}

	addPainting(
		title: string,
		artist: string,
		year: number,
		price: number,
	): void {
		this.paintings.push({
			title: title,
			artist: artist,
			year: year,
			price: price,
		});
	}

	getPaintings(): PaintingList[] {
		return this.paintings;
	}
}
