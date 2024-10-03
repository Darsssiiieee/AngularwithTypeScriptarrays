import { Component } from '@angular/core';
import ClassroomList from '../interface/classroom-list';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrl: './classroom-list.component.css'
})
export class ClassroomListComponent {
  classroomList: ClassroomList[] = [];

	id: number = 0;
	section: string = '';
	teacher: string = '';
	studentCount: number = 0;

	addNewClassroom() { if (this.section,this.id,this.studentCount,this.teacher.trim())
		this.classroomList.push({
			id: this.id,
			section: this.section,
			teacher: this.teacher,
			studentCount: this.studentCount,
		});
		this.id = 0;
		this.section= '';
		this.teacher = '';
		this.studentCount = 0;
	}
}
