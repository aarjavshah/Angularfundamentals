import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventListComponent } from './events/event-list.component';
import { EventThumbComponent } from './events/event-thumbnai.component';
import { EventDetailsComponent } from './events/event-details.component';
import { MyAppComp } from './app.component';
import {NavigationComponent} from './nav/navbar.component';
import {EventService} from './events/shared/event.service';
import {ToastrService} from './common/toastr.service'
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.component';
import { ErrorComponent } from './error/404.component';
import { EventRouteActivator } from './events/event-route-activator.component';

@NgModule({
  declarations: [
    MyAppComp,
    EventListComponent,
    EventThumbComponent,
    NavigationComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    {
      provide:'CanDeactivateCreateEvent',
      useValue: checkDirtyState
    }
    
  ],
  bootstrap: [MyAppComp]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty) 
    return window.confirm('You have not saved the information. Are you sure you want to continue?')
  return true

}
