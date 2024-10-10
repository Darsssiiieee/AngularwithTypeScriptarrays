import { Component } from '@angular/core';
import LibraryList from '../interface/library-list';
import { LibraryListServicesService } from '../angular-services/library-list-service/library-list-services.service';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrl: './library-list.component.css'
})
export class LibraryListComponent {
	libraries = [] as LibraryList[];
	constructor(private libraryService: LibraryListServicesService) {
		this.libraries = this.libraryService.getLibraries();
	}

	libraryName: string = '';
	programmingLanguage: string = '';
	description: string = '';
	developedBy: string = '';
	firstRelease: string = '';
	latestRelease: string = '';

	addLibrary() { if (this.libraryName,this.programmingLanguage,this.description,this.developedBy,this.firstRelease,this.latestRelease.trim())
		this.libraryService.addLibrary(
			this.libraryName,
			this.programmingLanguage,
			this.description,
			this.developedBy,
			this.firstRelease,
			this.latestRelease,
		);

		this.libraryName = '';
		this.programmingLanguage = '';
		this.description = '';
		this.developedBy = '';
		this.firstRelease = '';
		this.latestRelease = '';
	}
}
