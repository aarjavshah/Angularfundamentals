import {Component,Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector : 'event-thumbnail',
    template : `
    <div [routerLink]= "['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div> Date : {{event.date}}</div>
        <div [ngClass]="getTimeDetails()" [ngSwitch]="event?.time"> Time : {{event.time}}
            <span  *ngSwitchCase="'8:00 am'">(Early start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late start)</span>
            <span *ngSwitchDefault>(Normal start)</span>
        </div>
        <div> Price : \${{event.price}}</div>
        <div *ngIf = "event?.location">
            <span> Location : {{event.location?.address}}</span>
            <span> &nbsp;</span>
            <span> {{event.location?.city}}, {{event.location?.country}}</span>
        </div>
        <div *ngIf = "event?.onlineUrl">
            Online URL : {{event?.onlineUrl}}
        </div>
    </div>
    `,
    styles: [`
    .green {color : #003300 !important; }
    .bold {font-weight : bold;}
    `]
})

export class EventThumbComponent{
   @Input() event:any

   getTimeDetails(){
    const isEarlystart = this.event && this.event.time === '8:00 am'
    const isLatestart = this.event && this.event.time === '10:00 am'
    return {green : isEarlystart, bold : isLatestart}
   }
  
}
