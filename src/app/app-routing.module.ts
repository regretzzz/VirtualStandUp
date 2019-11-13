import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { MeetingListComponent } from './meeting-list/meeting-list.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { MeetingComponent } from './meeting-list/meeting/meeting.component';

import { AuthguardService } from './services/authguard.service';

const appRoutes: Routes =[
    {path: '', component:  HomeComponent,canActivate:[AuthguardService ] },
    {path: 'login', component:  LoginComponent },
    {path: 'home', component:  HomeComponent ,canActivate:[AuthguardService ]},
    { path: 'meetings', component: MeetingListComponent ,canActivate:[AuthguardService ]},
    {path: 'meetings/meeting', component: MeetingComponent, canActivate:[AuthguardService ]},
    {path: '**',redirectTo:''}
    
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}