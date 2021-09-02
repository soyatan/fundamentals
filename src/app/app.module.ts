import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';

import { EventsAppComponent } from './eventsapp.component';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
