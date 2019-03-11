import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventListComponent } from './events/event-list.component';
import { EventThumbComponent } from './events/event-thumbnai.component';
import { MyAppComp } from './app.component';
import {NavigationComponent} from './nav/navbar.component';

@NgModule({
  declarations: [
    MyAppComp,
    EventListComponent,
    EventThumbComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MyAppComp]
})
export class AppModule { }
