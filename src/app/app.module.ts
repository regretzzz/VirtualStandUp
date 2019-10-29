import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { TeamCardsComponent } from './home/team-cards/team-cards.component';
import { HeaderComponent } from './header/header/header.component';
import { MeetingListComponent } from './meeting-list/meeting-list.component';
import { MeetingComponent } from './meeting-list/meeting/meeting.component';
import { StandupMeetingComponent } from './standup-meeting/standup-meeting.component';
import { StandupComponent } from './standup-meeting/standup/standup.component';
import { FooterComponent } from './footer/footer/footer.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProfileComponent } from './header/dropdowns/profile/profile.component';
import { CollapseComponent } from './header/dropdowns/collapse/collapse.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TeamCardsComponent,
    HeaderComponent,
    MeetingListComponent,
    MeetingComponent,
    StandupMeetingComponent,
    StandupComponent,
    FooterComponent,
    ProfileComponent,
    CollapseComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
