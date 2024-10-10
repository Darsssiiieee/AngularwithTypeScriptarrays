import { Injectable } from '@angular/core';
import PhoneContactList from '../../interface/phone-contact-list';

@Injectable({
  providedIn: 'root'
})
export class PhoneContactListServicesService {
	private phoneContacts: PhoneContactList[] = [];

	constructor() {}

	addPhoneContact(
		id: number,
		name: string,
		email: string,
		phone: string,
	): void {
		this.phoneContacts.push({
			id: id,
			name: name,
			email: email,
			phone: phone,
		});
	}

	getPhoneContacts(): PhoneContactList[] {
		return this.phoneContacts;
	}
}
