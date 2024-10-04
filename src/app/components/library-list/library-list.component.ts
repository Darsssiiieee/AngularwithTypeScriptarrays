import { Component } from '@angular/core';
import LibraryList from '../interface/library-list';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrl: './library-list.component.css'
})
export class LibraryListComponent {
  libraries: LibraryList[] = [];

	libraryName: string = '';
	programmingLanguage: string = '';
	description: string = '';
	developedBy: string = '';
	firstRelease: string = '';
	latestRelease: string = '';

	addLibrary() { if (this.libraryName,this.programmingLanguage,this.description,this.developedBy,this.firstRelease,this.latestRelease.trim())
		this.libraries.push({
			libraryName: this.libraryName,
			programmingLanguage: this.programmingLanguage,
			description: this.description,
			developedBy: this.developedBy,
			firstRelease: this.firstRelease,
			latestRelease: this.latestRelease,
		});

		this.libraryName = '';
		this.programmingLanguage = '';
		this.description = '';
		this.developedBy = '';
		this.firstRelease = '';
		this.latestRelease = '';
	}
}
