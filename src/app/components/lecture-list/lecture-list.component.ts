import { Component } from '@angular/core';
import LectureList from '../interface/lecture-list';
import { LectureListServicesService } from '../angular-services/lecture-list-service/lecture-list-services.service';

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrl: './lecture-list.component.css'
})
export class LectureListComponent {
	lectureList = [] as LectureList[];
	constructor(private lectureListService: LectureListServicesService) {
		this.lectureList = this.lectureListService.getLectures();
	}
	id: number = 0;
	name: string = '';
	duration: number = 0;
	instructor: string = '';

	addLecture() { if (this.name,this.id,this.duration,this.instructor.trim())
		this.lectureListService.addLecture(
			this.id,
			this.name,
			this.duration,
			this.instructor,
		);
		this.id = 0;
		this.name = '';
		this.duration = 0;
		this.instructor = '';
	}
}
