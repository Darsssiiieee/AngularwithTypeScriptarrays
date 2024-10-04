import { Component } from '@angular/core';
import TourList from '../interface/tour-list';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent {
	tours: TourList[] = [];

	tourDate: string = '';
	tourName: string = '';
	tourLocation: string = '';
	tourPrice: number = 0;
	tourDuration: string = '';

	addTour() { if (this.tourName,this.tourDate,this.tourPrice,this.tourDuration,this.tourLocation.trim())
		this.tours.push({
			tourDate: this.tourDate,
			tourName: this.tourName,
			tourLocation: this.tourLocation,
			tourPrice: this.tourPrice,
			tourDuration: this.tourDuration,
		});

		this.tourDate = '';
		this.tourName = '';
		this.tourLocation = '';
		this.tourPrice = 0;
		this.tourDuration = '';
	}
}
