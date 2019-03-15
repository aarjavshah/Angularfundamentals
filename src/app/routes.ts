import {EventListComponent} from './events/event-list.component';
import {EventDetailsComponent} from './events/event-details.component';
import { Routes } from '@angular/router';
import { CreateEventComponent } from './events/create-event.component';
import { ErrorComponent } from './error/404.component';
import { EventRouteActivator } from './events/event-route-activator.component';

export const appRoutes:Routes = [
    {path : 'events/create', component : CreateEventComponent, canDeactivate:['CanDeactivateCreateEvent']},
    {path : 'events', component : EventListComponent},
    {path : 'events/:id', component : EventDetailsComponent, canActivate:[EventRouteActivator]},
    {path : '404', component : ErrorComponent},
    {path : '' ,  redirectTo : '/events', pathMatch : 'full'}
    
]