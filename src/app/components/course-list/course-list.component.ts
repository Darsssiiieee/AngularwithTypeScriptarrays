import { Component } from '@angular/core';
import { CourseList } from '../interface/course-list';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  courses: CourseList[] = [];

	id: string = '';
	name: string = '';
	teacher: string = '';
	credit: number = 0;

	addCourse(): void { if (this.name,this.teacher,this.credit,this.id.trim())
		this.courses.push({
			id: this.id,
			name: this.name,
			teacher: this.teacher,
			credit: this.credit,
		});

		this.id = '';
		this.name = '';
		this.teacher = '';
		this.credit = 0;
	}
}
