import {Component} from '@angular/core';
import {EventService} from './shared/event.service'
@Component({
    templateUrl:'./event-details.component.html',
    styles:[`{
        .container {padding-left : 20 px; padding-right : 20 px;}
        .eventImage { height:100px;}
    }`]

})

export class EventDetailsComponent{
    event: any
    constructor(private eventService : EventService){

    }

    ngOnInit(){
        this.event = this.eventService.getEvent(1);
    }
}   