import { Component } from '@angular/core';
import ExerciseList from '../interface/exercise-list';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent {
  exercises: ExerciseList[] = [];

	name: string = '';
	sets: number = 0;
	reps: number = 0;
	weight: number = 0;

	addExercise() {if (this.sets,this.reps,this.weight,this.name.trim())
		this.exercises.push({
			name: this.name,
			sets: this.sets,
			reps: this.reps,
			weight: this.weight,
		});

		this.name = '';
		this.sets = 0;
		this.reps = 0;
		this.weight = 0;
	}
}
