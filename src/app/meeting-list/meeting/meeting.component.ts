import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MeetingService } from 'src/app/services/meeting.service';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.sass']
})
export class MeetingComponent implements OnInit {
  serverURL = environment.url + 'sockets';
  StandUpList: any;
  ShowCards = false;
  IsDone = false;

  stompClient = null;
  private meetingID: any;
  isLoaded;
  isCustomSocketOpened = false;
  topic = '/update/here';
  corsHeaders;
  memberID;
  constructor(
    private route: ActivatedRoute,
    private meetingService: MeetingService
  ) {
    console.log(Date.now());
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.meetingID = params.meetingID;
      this.meetingService.GetMeetings(this.meetingID).subscribe(response => {
        console.log(response);
        this.StandUpList = response;
        this.memberID = params.memberID;
        if (this.StandUpList.cards.length > 0) {
          this.ShowCards = true;
          this.meetingService
            .IsDone(this.meetingID, params.memberID)
            .subscribe(data => {
              console.log(data);
              this.IsDone = data as boolean;
            });
        }
      });
      // this._connect();
      this.initializeWebSocketConnection();
    });

    // this.meetingService.GetMeetings(this.route.queryParams.value.meetingID).subscribe(response => {
    //   console.log(response);
    //   this.StandUpList = response;
    //   if(this.StandUpList.cards.length> 0 ){
    //     this.ShowCards = true;
    //     this.meetingService.IsDone(this.route.queryParams.value.meetingID,this.route.queryParams.value.memberID)
    //     .subscribe(data =>{
    //       console.log(data);
    //       this.IsDone = <boolean>data;
    //     });
    //   }
    // });
  }

  populateCards() {
    this.meetingService.GetMeetings(this.meetingID).subscribe(response => {
      console.log(response);
      this.StandUpList = response;
      if (this.StandUpList.cards.length > 0) {
        this.ShowCards = true;
        this.meetingService
          .IsDone(this.meetingID, this.memberID)
          .subscribe(data => {
            console.log(data);
            this.IsDone = data as boolean;
          });
      }
    });
  }

  initializeWebSocketConnection() {
    const ws = new SockJS(this.serverURL);
    this.stompClient = Stomp.over(ws);

    this.stompClient.connect({}, frame => {
      this.isLoaded = true;
      this.openSocket();
    });
  }
  openGlobalSocket() {
    this.stompClient.subscribe('/socket-publishers', message => {
      this.handleResult(message);
    });
  }

  openSocket() {
    if (this.isLoaded) {
      this.isCustomSocketOpened = true;
      this.stompClient.subscribe(
        '/socket-publishers/' + this.meetingID,
        message => {
          this.handleResult(message);
        }
      );
    }
  }
  handleResult(message) {
    console.log('send message jjj:' + message);
  }
}
