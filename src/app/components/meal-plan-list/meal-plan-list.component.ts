import { Component } from '@angular/core';
import MealPlanList from '../interface/meal-plan-list';

@Component({
  selector: 'app-meal-plan-list',
  templateUrl: './meal-plan-list.component.html',
  styleUrl: './meal-plan-list.component.css'
})
export class MealPlanListComponent {
  meals: MealPlanList[] = [];

	name: string = '';
	breakfast: string = '';
	lunch: string = '';
	dinner: string = '';
	snack: string = '';
	drink: string = '';

	addMealPlan() { if (this.name,this.breakfast,this.lunch,this.dinner,this.snack,this.drink.trim())
		this.meals.push({
			name: this.name,
			breakfast: this.breakfast,
			lunch: this.lunch,
			dinner: this.dinner,
			snack: this.snack,
			drink: this.drink,
		});

		this.name = '';
		this.breakfast = '';
		this.lunch = '';
		this.dinner = '';
		this.snack = '';
		this.drink = '';
	}
}
