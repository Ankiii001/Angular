import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `<div>
  <h1>Upcoming Angular Events</h1>
  <hr/>
  <event-thumbnail [event]="event1"></event-thumbnail>
  </div>
   `
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '12/12/2018',
        price: '599.99',
        time: '17:00',
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    };
}
