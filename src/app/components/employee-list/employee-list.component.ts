import { Component } from '@angular/core';
import { EmployeeList } from '../interface/employee-list';
import { EmployeeListServicesService } from '../angular-services/employee-list-service/employee-list-services.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
	employees = [] as EmployeeList[];
	constructor(private employeeListService: EmployeeListServicesService) {
		this.employees = this.employeeListService.getEmployees();
	}

	id: string = '';
	name: string = '';
	position: string = '';
	age: number = 0;

	addEmployee(): void { if (this.name,this.id,this.age,this.position.trim())
		this.employeeListService.addEmployee(
			this.id,
			this.name,
			this.position,
			this.age,
		);

		this.age = 0;
		this.position = '';
		this.id = '';
		this.name = '';
	}
}
