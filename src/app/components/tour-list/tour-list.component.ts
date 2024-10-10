import { Component } from '@angular/core';
import TourList from '../interface/tour-list';
import { TourListServicesService } from '../angular-services/tour-list-service/tour-list-services.service';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent {
	tours = [] as TourList[];
	constructor(private tourService: TourListServicesService) {
		this.tours = this.tourService.getTours();
	}

	tourDate: string = '';
	tourName: string = '';
	tourLocation: string = '';
	tourPrice: number = 0;
	tourDuration: string = '';

	addTour() { if (this.tourName,this.tourDate,this.tourPrice,this.tourDuration,this.tourLocation.trim())
		this.tourService.addTour(
			this.tourDate,
			this.tourName,
			this.tourLocation,
			this.tourPrice,
			this.tourDuration,
		);

		this.tourDate = '';
		this.tourName = '';
		this.tourLocation = '';
		this.tourPrice = 0;
		this.tourDuration = '';
	}
}
