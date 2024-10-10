import { Injectable } from '@angular/core';
import ExerciseList from '../../interface/exercise-list';

@Injectable({
  providedIn: 'root'
})
export class ExerciseListServicesService {
  private exercises: ExerciseList[] = [];

	constructor() {}

	addExercise(
		name: string,
		sets: number,
		reps: number,
		weight: number,
	): void {
		this.exercises.push({
			name: name,
			sets: sets,
			reps: reps,
			weight: weight,
		});
	}

	getExercises(): ExerciseList[] {
		return this.exercises;
	}
}
