import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { EventService } from './../shared/event.service';

@Injectable({ providedIn: 'root' })
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const eventExists = !!this.eventService.getevent(+route.params['id']);
    if (!eventExists) this.router.navigate(['/404']);
    return eventExists;
  }
}
