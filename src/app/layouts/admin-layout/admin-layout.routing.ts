import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { ChattingComponent } from 'src/app/pages/chatting/chatting.component';
import { CreateEventComponent } from 'src/app/pages/create-event/create-event.component';
import { EventList } from 'src/app/pages/event-list/event-list.component';
import { UserList } from 'src/app/pages/users/user-list.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'create-event', component: CreateEventComponent },
    { path: 'event-list', component: EventList },
    { path: 'user-list', component: UserList },
    { path: 'tables', component: TablesComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'chatting', component: ChattingComponent },
];
