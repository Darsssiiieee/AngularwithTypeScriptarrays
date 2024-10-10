import { Injectable } from '@angular/core';
import ClassroomList from '../../interface/classroom-list';

@Injectable({
  providedIn: 'root'
})
export class ClassroomListServicesService {
  private classrooms: ClassroomList[] = [];

	constructor() {}
  
	addClassroom(
    id: number, 
    name: string, 
    teacher: string, 
    studentCount: number, 
    section: string,
	): void {
		this.classrooms.push({
      id: id,
      name: name,
      teacher: teacher,
      studentCount: studentCount,
      section: ''
    });
	}
	getClassrooms(): ClassroomList[] {
		return this.classrooms;
	}
}
