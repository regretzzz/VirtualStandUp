import { Injectable } from '@angular/core';
import { StandUp } from '../shared/models/standup.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StandupService {

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute)  { }


  public AddUpdate(standUp: StandUp) {
    console.log("service"+ standUp);
    let url = `http://localhost:8080/standup/`;
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post(url,standUp,{ headers: headers});
  }
}
