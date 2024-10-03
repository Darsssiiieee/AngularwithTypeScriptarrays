import { Component } from '@angular/core';
import Animals from '../interface/animals-list';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent {
  animals: Animals[] = [];

	id: string = '';
	name: string = '';
	origin: string = '';

	addAnimal(): void { if (this.id,this.name,this.origin.trim())
		this.animals.push({
			id: Number(this.id),
			name: this.name,
			origin: this.origin,
		});

		this.id = '';
		this.name = '';
		this.origin = '';
	}
}
