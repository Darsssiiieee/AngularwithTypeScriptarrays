import { Component } from '@angular/core';
import MealPlanList from '../interface/meal-plan-list';
import { MealPlanListServicesService } from '../angular-services/meal-plan-list-service/meal-plan-list-services.service';

@Component({
  selector: 'app-meal-plan-list',
  templateUrl: './meal-plan-list.component.html',
  styleUrl: './meal-plan-list.component.css'
})
export class MealPlanListComponent {
	meals = [] as MealPlanList[];
	constructor(private mealPlanService: MealPlanListServicesService) {
		this.meals = this.mealPlanService.getMeals();
	}

	name: string = '';
	breakfast: string = '';
	lunch: string = '';
	dinner: string = '';
	snack: string = '';
	drink: string = '';

	addMealPlan() { if (this.name,this.breakfast,this.lunch,this.dinner,this.snack,this.drink.trim())
		this.mealPlanService.addMealPlan(
			this.name,
			this.breakfast,
			this.lunch,
			this.dinner,
			this.snack,
			this.drink,
		);

		this.name = '';
		this.breakfast = '';
		this.lunch = '';
		this.dinner = '';
		this.snack = '';
		this.drink = '';
	}
}
