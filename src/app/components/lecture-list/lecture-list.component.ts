import { Component } from '@angular/core';
import LectureList from '../interface/lecture-list';

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrl: './lecture-list.component.css'
})
export class LectureListComponent {
	lectureList: LectureList[] = [];

	id: number = 0;
	name: string = '';
	duration: number = 0;
	instructor: string = '';

	addLecture() { if (this.name,this.id,this.duration,this.instructor.trim())
		this.lectureList.push({
			id: this.id,
			name: this.name,
			duration: this.duration,
			instructor: this.instructor,
		});
		this.id = 0;
		this.name = '';
		this.duration = 0;
		this.instructor = '';
	}
}
