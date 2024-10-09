import { Component } from '@angular/core';
import Animals from '../interface/animals-list';
import { AnimalListServicesService } from '../angular-services/animal-list-service/animal-list-services.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent {
	animals = [] as Animals[];
	constructor(private animalService: AnimalListServicesService) {
		this.animals = this.animalService.getAnimals();
	}

	id: number = 0;
	name: string = '';
	origin: string = '';

	addAnimal(): void { if (this.id,this.name,this.origin.trim())
		this.animalService.addAnimal(this.id, this.name, this.origin);
		this.id = 0;
		this.name = '';
		this.origin = '';
	}
}
