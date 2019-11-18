import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { TeamCardsComponent } from './home/team-cards/team-cards.component';
import { HeaderComponent } from './header/header/header.component';
import { MeetingListComponent } from './meeting-list/meeting-list.component';
import { MeetingComponent } from './meeting-list/meeting/meeting.component';

import { FooterComponent } from './footer/footer/footer.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProfileComponent } from './header/dropdowns/profile/profile.component';
import { CollapseComponent } from './header/dropdowns/collapse/collapse.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { FloatAddButtonDirective } from './shared/directives/float-add-button.directive';
import { RandomColorCardDirective } from './shared/directives/random-color-card.directive';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddUpdateFormComponent } from './meeting-list/meeting/add-update-form/add-update-form.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TeamCardsComponent,
    HeaderComponent,
    MeetingListComponent,
    MeetingComponent,

    FooterComponent,
    ProfileComponent,
    CollapseComponent,
    PageNotFoundComponent,
    FloatAddButtonDirective,
    RandomColorCardDirective,
    AddUpdateFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
