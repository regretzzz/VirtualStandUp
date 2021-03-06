import { Component, OnInit } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  Router,
  ActivatedRoute,
  ParamMap
} from '@angular/router';

import { TeamService } from '../services/team.service';
import { map, switchMap } from 'rxjs/operators';

import { Team } from '../shared/models/team.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.sass']
})
export class MeetingListComponent implements OnInit {
  Meetings: any;
  ListUsers: any;
  Team: any;
  // [
  //   new Meeting(1,'Test  Meeting1','Meeting Desc1',true, new Date().toDateString(),new Date().toDateString()),
  //   new Meeting(2,'Test  Meeting2','Meeting Desc2',true, new Date().toDateString(),new Date().toDateString()),
  //   new Meeting(3,'Test  Meeting3','Meeting Desc3',true, new Date().toDateString(),new Date().toDateString())
  // ];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private teamService: TeamService
  ) {
    // this.route.queryParamMap.subscribe(paramMap => {
    //   console.log({ paramMap });
    //   const teamID = paramMap.has('teamID') ? paramMap.get('value') : null;
    //   if (!value) { return; }
    // });
    // console.log(route.queryParams.value.teamID);
    // teamService.GetMembers(route.queryParams.value.teamID).subscribe(responseData => {
    //   this.ListUsers = responseData;
    //   console.log(this.ListUsers);
    // });
    // teamService.GetMeetings(route.queryParams.value.teamID).subscribe(responseData => {
    //   console.log(responseData);
    //   this.Meetings = responseData;
    //   console.log(this.Meetings);
    // });
  }

  selectTable(event, row: HTMLTableRowElement) {
    console.log(this.Meetings[0].meetingID);
    this.router.navigate(['meeting'], {
      relativeTo: this.route,
      queryParams: {
        meetingID: this.Meetings[row.rowIndex - 1].meetingID
      },
      preserveQueryParams: true,
      queryParamsHandling: 'merge'
    });
  }

  ngOnInit() {
    this.route.queryParamMap
      .pipe(
        map((paramMap: ParamMap) => {
          return paramMap.has('teamID') ? paramMap.get('teamID') : null;
        }),
        switchMap((teamId: string) => {
          const teams: Team[] = JSON.parse(localStorage.getItem('teams'));
          console.log(teams);
          this.Team = teams.find(team => {
            return team.teamId === teamId;
          });
          console.log(this.Team);
          return forkJoin([
            this.teamService.GetMembers(teamId),
            this.teamService.GetMeetings(teamId)
          ]);
        })
      )
      .subscribe(data => {
        console.log(data);

        this.ListUsers = data[0];
        this.Meetings = data[1];
      });
  }
}
// Access to XMLHttpRequest at
// 'http://localhost:8080/socket/info?t=1573714867497'
// from origin 'http://localhost:4200'
// has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource
