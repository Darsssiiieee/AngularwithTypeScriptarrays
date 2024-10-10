import { Injectable } from '@angular/core';
import EventList from '../../interface/event-list';

@Injectable({
  providedIn: 'root'
})
export class EventListServicesService {
  private events: EventList[] = [];

  constructor() { }

  addEvent(	eventDate: string,
	eventName: string,
	eventLocation: string,
	eventPrice: number,
	eventDuration: string,): void {
    this.events.push({
      eventDate: eventDate,
      eventName: eventName,
      eventLocation: eventLocation,
      eventPrice: eventPrice,
      eventDuration: eventDuration,
    });
  }

  getEvents(): EventList[] {
    return this.events;
  }
}
