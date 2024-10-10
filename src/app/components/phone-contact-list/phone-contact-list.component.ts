import { Component } from '@angular/core';
import PhoneContactList from '../interface/phone-contact-list';
import { PhoneContactListServicesService } from '../angular-services/phone-contact-list-service/phone-contact-list-services.service';

@Component({
  selector: 'app-phone-contact-list',
  templateUrl: './phone-contact-list.component.html',
  styleUrl: './phone-contact-list.component.css'
})
export class PhoneContactListComponent {
	phoneContactList = [] as PhoneContactList[];
	constructor(private phoneContactListService: PhoneContactListServicesService) {
		this.phoneContactList = this.phoneContactListService.getPhoneContacts();
	}
	id: number = 0;
	name: string = '';
	email: string = '';
	phone: string = '';

	addPhoneContact(): void {if (this.name,this.id,this.email,this.phone.trim())
		this.phoneContactListService.addPhoneContact(
			this.id,
			this.name,
			this.email,
			this.phone,
		);

		this.id = 0;
		this.name = '';
		this.email = '';
		this.phone = '';
	}
}
