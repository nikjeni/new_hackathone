import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistartionService } from 'src/app/services/registration.service';
import { isNullOrUndefined } from 'util';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export let ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/chatting', title: 'Communication', icon: 'ni ni-chat-round text-orange', class: '' },
  { path: '/user-profile', title: 'User profile', icon: 'ni-single-02 text-yellow', class: '' },
  { path: '/event-list', title: 'Events', icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/user-list', title: 'Users', icon: 'ni-bullet-list-67 text-red', class: '' },

  // { path: '/tables', title: 'Users', icon: 'ni-bullet-list-67 text-red', class: '' },
  // { path: '/login', title: 'Login', icon: 'ni-key-25 text-info', class: '' },
  // { path: '/register', title: 'Register', icon: 'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router,private registrationService:RegistartionService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

}
