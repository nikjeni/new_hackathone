import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChattingComponent } from 'src/app/pages/chatting/chatting.component';
import { CreateEventComponent } from 'src/app/pages/create-event/create-event.component';
import { EventList } from 'src/app/pages/event-list/event-list.component';
import { UserList } from 'src/app/pages/users/user-list.component';
import { UiSwitchModule } from 'ngx-toggle-switch';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
    UiSwitchModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    ChattingComponent,
    CreateEventComponent,
    EventList,
    UserList
  ],
  schemas: [NO_ERRORS_SCHEMA],
})

export class AdminLayoutModule { }
