import { Injectable } from '@angular/core';
import LectureList from '../../interface/lecture-list';

@Injectable({
  providedIn: 'root'
})
export class LectureListServicesService {
  private lectures: LectureList[] = [];

	constructor() {}

	addLecture(
		id: number,
		name: string,
		duration: number,
		instructor: string,
	): void {
		this.lectures.push({
			id: id,
			name: name,
			duration: duration,
			instructor: instructor,
		});
	}

	getLectures(): LectureList[] {
		return this.lectures;
	}
}
