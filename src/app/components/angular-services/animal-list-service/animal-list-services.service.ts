import { Injectable } from '@angular/core';
import Animals from '../../interface/animals-list';

@Injectable({
  providedIn: 'root'
})
export class AnimalListServicesService {
  private animals: Animals[] = [];

	constructor() {}

	addAnimal(
		id: number, 
		name: string, 
		origin: string
	): void {
		this.animals.push({
			id: id,
			name: name,
			origin: origin,
		});
	}
	getAnimals(): Animals[] {
		return this.animals;
	}
}
