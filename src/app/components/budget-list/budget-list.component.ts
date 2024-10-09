import { Component } from '@angular/core';
import BudgetList from '../interface/budget-list';
import { BudgetListServicesService } from '../angular-services/budget-list-service/budget-list-services.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.css'
})
export class BudgetListComponent {
	budgets = [] as BudgetList[];
	constructor(private budgetListService: BudgetListServicesService) {
		this.budgets = this.budgetListService.getBudgets();
	}

	project: string = '';
	budget: number = 0;
	status: string = '';
	startDate: string = '';
	endDate: string = '';

	addBudget() { if (this.project,this.budget,this.status,this.startDate,this.endDate.trim())
		this.budgetListService.addBudget(
			this.project,
			this.budget,
			this.status,
			this.startDate,
			this.endDate,
		);

		this.project = '';
		this.budget = 0;
		this.status = '';
		this.startDate = '';
		this.endDate = '';
	}
}
