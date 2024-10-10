import { Component } from '@angular/core';
import ExerciseList from '../interface/exercise-list';
import { ExerciseListServicesService } from '../angular-services/exercise-list-service/exercise-list-services.service';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent {
	exercises = [] as ExerciseList[];
	constructor(private exerciseService: ExerciseListServicesService) {
		this.exercises = this.exerciseService.getExercises();
	}
	name: string = '';
	sets: number = 0;
	reps: number = 0;
	weight: number = 0;

	addExercise() {if (this.sets,this.reps,this.weight,this.name.trim())
		this.exerciseService.addExercise(
			this.name,
			this.sets,
			this.reps,
			this.weight,
		);

		this.name = '';
		this.sets = 0;
		this.reps = 0;
		this.weight = 0;
	}
}
