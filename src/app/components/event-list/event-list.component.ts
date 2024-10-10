import { Component } from '@angular/core';
import EventList from '../interface/event-list';
import { EventListServicesService } from '../angular-services/event-list-service/event-list-services.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {
	events = [] as EventList[];
	constructor(private eventService: EventListServicesService) {
		this.events = this.eventService.getEvents();
	}

	eventDate: string = '';
	eventName: string = '';
	eventLocation: string = '';
	eventPrice: number = 0;
	eventDuration: string = '';

	addEvent() {
		this.eventService.addEvent(
			this.eventDate,
			this.eventName,
			this.eventLocation,
			this.eventPrice,
			this.eventDuration
		);

		this.eventDate = '';
		this.eventName = '';
		this.eventLocation = '';
		this.eventPrice = 0;
		this.eventDuration = '';
	}
}
