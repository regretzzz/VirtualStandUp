import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router, NavigationStart } from '@angular/router';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnChanges, OnInit {
  title = 'VirtualStandUp';
  isLoggedIn = false;
  stompClient = null;
  private meetingID: any;
  isLoaded;
  isCustomSocketOpened = false;
  topic = '/update/here';
  serverURL = environment.url + 'sockets';
  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnChanges() {
    console.log('here');
  }
  ngOnInit() {
    console.log('activated');
    this.auth.getValue().subscribe(value => {
      this.isLoggedIn = value;
    });
    // this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    const ws = new SockJS(this.serverURL);
    this.stompClient = Stomp.over(ws);
    const that = this;
    console.log(this.stompClient);
    this.stompClient.connect({}, frame => {
      this.isLoaded = true;
      this.openGlobalSocket();
    });
  }
  openGlobalSocket() {
    this.stompClient.subscribe('/socket-publishers', message => {
      this.handleResult(message);
    });
  }
  handleResult(message) {
    // if (message.body) {
    //   let messageResult: Message = JSON.parse(message.body);
    //   console.log(messageResult);
    //   this.messages.push(messageResult);
    //   this.toastr.success("new message recieved", null, {
    //     'timeOut': 3000
    //   });
    // }
    console.log(message);
  }
}
