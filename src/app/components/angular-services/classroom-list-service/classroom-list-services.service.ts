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
    section: string,
    teacher: string, 
    studentCount: number, 
    
	): void {
		this.classrooms.push({
      id: id,
      section: section,
      teacher: teacher,
      studentCount: studentCount,
    });
	}
	getClassrooms(): ClassroomList[] {
		return this.classrooms;
	}
}
