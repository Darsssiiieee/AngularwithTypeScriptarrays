import { Injectable } from '@angular/core';
import TourList from '../../interface/tour-list';

@Injectable({
  providedIn: 'root'
})
export class TourListServicesService {
  private tours: TourList[] = [];

	constructor() {}

	addTour(
		tourDate: string,
		tourName: string,
		tourLocation: string,
		tourPrice: number,
		tourDuration: string,
	): void {
		this.tours.push({
			tourDate: tourDate,
			tourName: tourName,
			tourLocation: tourLocation,
			tourPrice: tourPrice,
			tourDuration: tourDuration,
		});
	}

	getTours(): TourList[] {
		return this.tours;
	}
}
