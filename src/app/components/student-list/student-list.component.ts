import { Component } from '@angular/core';
import StudentList from '../interface/student-list';
import { StudentListServicesService } from '../angular-services/student-list-service/student-list-services.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
	students = [] as StudentList[];
	constructor(private studentListService: StudentListServicesService) {
		this.students = this.studentListService.getStudents();
	}

	id: string = '';
	name: string = '';
	grade: string = '';
	age: number = 0;

	addStudent(): void { if (this.id,this.age,this.grade,this.name.trim())
		this.studentListService.addStudent(
			this.id,
			this.name,
			this.grade,
			this.age,
		);

		this.age = 0;
		this.grade = '';
		this.id = '';
		this.name = '';
	}
}
