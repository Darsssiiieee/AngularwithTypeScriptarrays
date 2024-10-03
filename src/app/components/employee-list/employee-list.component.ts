import { Component } from '@angular/core';
import { EmployeeList } from '../interface/employee-list';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees: EmployeeList[] = [];

	id: string = '';
	name: string = '';
	position: string = '';
	age: number = 0;

	addEmployee(): void { if (this.name,this.id,this.age,this.position.trim())
		this.employees.push({
			id: this.id,
			name: this.name,
			position: this.position,
			age: this.age,
		});

		this.age = 0;
		this.position = '';
		this.id = '';
		this.name = '';
	}
}
