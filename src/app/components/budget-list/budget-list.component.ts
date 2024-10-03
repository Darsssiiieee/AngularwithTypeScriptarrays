import { Component } from '@angular/core';
import BudgetList from '../interface/budget-list';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.css'
})
export class BudgetListComponent {
	budgets: BudgetList[] = [];

	project: string = '';
	budget: number = 0;
	status: string = '';
	startDate: string = '';
	endDate: string = '';

	addBudget() { if (this.project,this.budget,this.status,this.startDate,this.endDate.trim())
		this.budgets.push({
			project: this.project,
			budget: this.budget,
			status: this.status,
			startDate: this.startDate,
			endDate: this.endDate,
		});

		this.project = '';
		this.budget = 0;
		this.status = '';
		this.startDate = '';
		this.endDate = '';
	}
}
