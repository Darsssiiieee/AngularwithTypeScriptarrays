import { Injectable } from '@angular/core';
import StudentList from '../../interface/student-list';

@Injectable({
  providedIn: 'root'
})
export class StudentListServicesService {
  private students: StudentList[] = [];

	constructor() {}

	addStudent(id: string, name: string, grade: string, age: number): void {
		this.students.push({
			id: id,
			name: name,
			grade: grade,
			age: age,
		});
	}

	getStudents(): StudentList[] {
		return this.students;
	}
}
