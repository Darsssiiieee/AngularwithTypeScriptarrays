import { Injectable } from '@angular/core';
import MealPlanList from '../../interface/meal-plan-list';

@Injectable({
  providedIn: 'root'
})
export class MealPlanListServicesService {
  private mealPlans: MealPlanList[] = [];

	constructor() {}

	addMealPlan(
		name: string,
		breakfast: string,
		lunch: string,
		dinner: string,
		snack: string,
		drink: string,
	): void {
		this.mealPlans.push({
			name: name,
			breakfast: breakfast,
			lunch: lunch,
			dinner: dinner,
			snack: snack,
			drink: drink,
		});
	}

	getMeals(): MealPlanList[] {
		return this.mealPlans;
	}
}
