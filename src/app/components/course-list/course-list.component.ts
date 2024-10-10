import { Component } from '@angular/core';
import { CourseList } from '../interface/course-list';
import { CourseListServicesService } from '../angular-services/course-list-service/course-list-services.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
	courses = [] as CourseList[];
	constructor(private courseListService: CourseListServicesService) {
		this.courses = this.courseListService.getCourses();
	}
	id: string = '';
	name: string = '';
	teacher: string = '';
	credit: number = 0;

	addCourse(): void { if (this.name,this.teacher,this.credit,this.id.trim())
		this.courseListService.addCourse(
			this.id,
			this.name,
			this.teacher,
			this.credit,
		);

		this.id = '';
		this.name = '';
		this.teacher = '';
		this.credit = 0;
	}
}
