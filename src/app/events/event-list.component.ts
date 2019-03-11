import {Component} from '@angular/core'

@Component({
    selector : 'event-list',
    template: `
    <div>
    <h1>Upcoming Events</h1>
    <hr>
    <event-thumbnail [event]="eventData"></event-thumbnail>
    </div>
    `
})

export class EventListComponent{
    eventData = {
        id : 1001,
        name : 'Fundamental Learning',
        date : '12/12/2019',
        time: '09:00',
        price : 500,
        imageurl : 'assets/images/angularconnect-shield.png',
        location : {
            address : '1102 JH',
            city : 'Amsterdam',
            country : 'Netherlands'
        }
    }

    
}