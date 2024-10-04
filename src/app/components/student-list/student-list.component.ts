import { Component } from '@angular/core';
import StudentList from '../interface/student-list';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  students: StudentList[] = [];

	id: string = '';
	name: string = '';
	grade: string = '';
	age: number = 0;

	addStudent(): void { if (this.id,this.age,this.grade,this.name.trim())
		this.students.push({
			id: this.id,
			name: this.name,
			grade: this.grade,
			age: this.age,
		});

		this.age = 0;
		this.grade = '';
		this.id = '';
		this.name = '';
	}
}
