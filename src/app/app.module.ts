import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404component';
import { EventsAppComponent } from './eventsapp.component';
import {
  EventListResolver,
  EventService,
  EventsListComponent,
  EventThumbnailComponent,
  EventRouteActivator,
  EventDetailsComponent,
  CreateEventComponent,
} from './events/index';

import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    EventsAppComponent,
    CreateEventComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    Error404Component,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],

  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    { provide: 'canDeactivateEvent', useValue: checkDirtyState },
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      "You didn't save the event, do you really want to continue?"
    );
  }
  return true;
}
