import { Component } from '@angular/core';
import Subject from '../interface/subject-list';
import { SubjectListServicesService } from '../angular-services/subject-list-service/subject-list-services.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {
	subjects = [] as Subject[];

	constructor(private subjectListService: SubjectListServicesService) {
		this.subjects = this.subjectListService.getSubjects();
	}

	id: number = 0;
	name: string = '';
	teacher: string = '';

	addSubject(): void { if (this.name,this.id,this.teacher.trim())
		this.subjectListService.addSubject(this.id, this.name, this.teacher);
		this.id = 0;
		this.name = '';
		this.teacher = '';
	}
}
