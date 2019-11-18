import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  public ListOfMembers: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ViewTeam(teamId: string, userID: string) {
    const url = `http://localhost:8080/team/member/${teamId}/${userID}`;
    this.http.get(url).subscribe(responseData => {
      this.ListOfMembers = responseData;
      console.log(responseData);
      this.router.navigate(['meetings'], {
        queryParams: { teamID: teamId, memberID: responseData[0].memberID }
      });
      return responseData;
    });
  }

  GetMembers(teamId: string) {
    const url = `http://localhost:8080/team/member/${teamId}`;
    return this.http.get(url);
  }

  GetMeetings(teamId: string) {
    const url = `http://localhost:8080/team/meetings/${teamId}`;
    return this.http.get(url);
  }
}
