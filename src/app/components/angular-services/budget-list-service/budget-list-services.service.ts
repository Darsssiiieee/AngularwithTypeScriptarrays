import { Injectable } from '@angular/core';
import BudgetList from '../../interface/budget-list';

@Injectable({
  providedIn: 'root'
})
export class BudgetListServicesService {
  private budgets: BudgetList[] = [];
	constructor() {}
  
	addBudget(
		project: string,
		budget: number,
		status: string,
		startDate: string,
		endDate: string,
	): void {
		this.budgets.push({
			project: project,
			budget: budget,
			status: status,
			startDate: startDate,
			endDate: endDate,
		});
	}
	getBudgets(): BudgetList[] {
		return this.budgets;
	}
}
