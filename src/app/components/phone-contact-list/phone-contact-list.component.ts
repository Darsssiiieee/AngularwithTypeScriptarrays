import { Component } from '@angular/core';
import PhoneContactList from '../interface/phone-contact-list';

@Component({
  selector: 'app-phone-contact-list',
  templateUrl: './phone-contact-list.component.html',
  styleUrl: './phone-contact-list.component.css'
})
export class PhoneContactListComponent {
  phoneContactList: PhoneContactList[] = [];

	id: string = '';
	name: string = '';
	email: string = '';
	phone: string = '';

	addPhoneContact(): void {if (this.name,this.id,this.email,this.phone.trim())
		this.phoneContactList.push({
			id: Number(this.id),
			name: this.name,
			email: this.email,
			phone: this.phone,
		});

		this.id = '';
		this.name = '';
		this.email = '';
		this.phone = '';
	}
}
