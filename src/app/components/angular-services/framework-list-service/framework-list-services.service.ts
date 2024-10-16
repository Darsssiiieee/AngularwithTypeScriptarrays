import { Injectable } from '@angular/core';
import FrameworkList from '../../interface/framework-list';

@Injectable({
  providedIn: 'root'
})
export class FrameworkListServicesService {
  private frameworks: FrameworkList[] = [];

	constructor() {}

	addFramework(
		name: string,
		description: string,
		developedBy: string,
		firstRelease: string,
		latestRelease: string,
	): void {
		this.frameworks.push({
			name: name,
			description: description,
			developedBy: developedBy,
			firstRelease: firstRelease,
			latestRelease: latestRelease,
		});
	}

	getFrameworks(): FrameworkList[] {
		return this.frameworks;
	}
}
