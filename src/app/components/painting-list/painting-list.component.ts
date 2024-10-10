import { Component } from '@angular/core';
import PaintingList from '../interface/painting-list';
import { PaintingListServicesService } from '../angular-services/painting-list-service/painting-list-services.service';

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrl: './painting-list.component.css'
})
export class PaintingListComponent {
	paintingList = [] as PaintingList[];
	constructor(private paintingService: PaintingListServicesService) {
		this.paintingList = this.paintingService.getPaintings();
	}
	title: string = '';
	artist: string = '';
	year: number = 0;
	price: number = 0;

	addPainting() { if (this.year,this.price,this.title,this.artist.trim())
		this.paintingService.addPainting(
			this.title,
			this.artist,
			this.year,
			this.price,
		);
		this.title = '';
		this.artist = '';
		this.year = 0;
		this.price = 0;
	}
}
