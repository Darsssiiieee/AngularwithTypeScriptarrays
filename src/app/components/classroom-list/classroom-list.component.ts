import { Component } from '@angular/core';
import ClassroomList from '../interface/classroom-list';
import { ClassroomListServicesService } from '../angular-services/classroom-list-service/classroom-list-services.service';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrl: './classroom-list.component.css'
})
export class ClassroomListComponent {
	classroomList = [] as ClassroomList[];
	constructor(private classroomService: ClassroomListServicesService) {
		this.classroomList = this.classroomService.getClassrooms();
	}
	id: number = 0;
	section: string = '';
	teacher: string = '';
	studentCount: number = 0;
	name: string = '';

	addNewClassroom() { if (this.name,this.section,this.id,this.studentCount,this.teacher.trim())
		this.classroomService.addClassroom(
			this.id,
			this.name,
			this.teacher,
			this.studentCount,
			this.section,
		);
		this.id = 0;
		this.section= '';
		this.teacher = '';
		this.studentCount = 0;
		this.name = '';
	}
}
