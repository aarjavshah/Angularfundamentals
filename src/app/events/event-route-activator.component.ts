import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { EventService } from './shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate{
    constructor(private event : EventService, private router: Router){

    }
    canActivate(route:ActivatedRouteSnapshot){
        const isExists = !!this.event.getEvent(+route.params['id'])
        if(!isExists)
            this.router.navigate(['/404'])
        return isExists
    }
}