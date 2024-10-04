import { Component } from '@angular/core';
import Subject from '../interface/subject-list';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {
	subjects: Subject[] = [];

	id: string = '';
	name: string = '';
	teacher: string = '';

	addSubject(): void { if (this.name,this.id,this.teacher.trim())
		this.subjects.push({
			id: Number(this.id),
			name: this.name,
			teacher: this.teacher,
		});

		this.id = '';
		this.name = '';
		this.teacher = '';
	}
}
