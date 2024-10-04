import { Component } from '@angular/core';
import PaintingList from '../interface/painting-list';

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrl: './painting-list.component.css'
})
export class PaintingListComponent {
  paintingList: PaintingList[] = [];

	title: string = '';
	artist: string = '';
	year: number = 0;
	price: number = 0;

	addPainting() { if (this.year,this.price,this.title,this.artist.trim())
		this.paintingList.push({
			title: this.title,
			artist: this.artist,
			year: this.year,
			price: this.price,
		});
		this.title = '';
		this.artist = '';
		this.year = 0;
		this.price = 0;
	}
}
