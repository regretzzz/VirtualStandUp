import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MeetingDTO } from '../shared/models/meetingDTO.model';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  constructor(private http: HttpClient) {}

  public GetMeetings(meetingID: string): Observable<any> {
    const url = `http://localhost:8080/meeting/${meetingID}`;

    return this.http.get(url);
  }

  public IsDone(meetingID: string, memberID: string) {
    const url = `http://localhost:8080/meeting/${meetingID}/${memberID}`;

    return this.http.get(url);
  }
}
