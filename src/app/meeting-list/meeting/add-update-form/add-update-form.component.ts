import {
  Component,
  TemplateRef,
  Input,
  ViewChild,
  ɵConsole,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { StandUp } from '../../../shared/models/standup.model';
import { StandupService } from 'src/app/services/standup.service';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-add-update-form',
  templateUrl: './add-update-form.component.html',
  styleUrls: ['./add-update-form.component.sass']
})
export class AddUpdateFormComponent implements OnInit {
  @Input() disabled: boolean;

  @Output() handleMessage = new EventEmitter();
  serverUrl = environment.url + 'socket';
  isLoaded = false;
  isCustomSocketOpened = false;
  @Input() stompClient;
  meetingID: string;
  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private standUpService: StandupService
  ) {}

  standup: StandUp = new StandUp();
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  confirm(form: NgForm) {
    console.log(form);
    this.route.queryParams.subscribe(params => {
      this.meetingID = params.meetingID;
      console.log('params' + params.meetingID);
      this.standup.blockers = form.controls.blockers.value;
      this.standup.yesterday = form.controls.yesterday.value;
      this.standup.today = form.controls.today.value;
      this.standup.meetingID = params.meetingID;
      this.standup.member_id = params.memberID;
      console.log(this.standup);
      this.standUpService.AddUpdate(this.standup).subscribe(data => {
        console.log(data);
        this.sendMessageUsingSocket(form);
        this.modalRef.hide();
      });
    });
  }

  // initializeWebSocketConnection() {
  //   let ws = new SockJS(this.serverUrl);
  //   this.stompClient = Stomp.over(ws);

  //   this.stompClient.connect({}, function (frame) {
  //     this.isLoaded = true;
  //     this.openGlobalSocket();
  //   });
  // }

  // openGlobalSocket() {
  //   this.stompClient.subscribe("/socket-publisher", (message) => {
  //     this.handleMessage.emit(message);
  //   });
  // }
  // openSocket(meetingID: string) {
  //   if (this.isLoaded) {
  //     this.isCustomSocketOpened = true;
  //     this.stompClient.subscribe("/socket-publisher/"+meetingID, (message) => {
  //       this.handleMessage.emit(message);
  //       this.modalRef.hide();

  //     });
  //   }
  // }

  sendMessageUsingSocket(form: NgForm) {
    if (form.valid) {
      // let message: Message = { message: this.form.value.message, fromId: this.userForm.value.fromId, toId: this.userForm.value.toId };
      const message = {
        id: this.meetingID
      };
      this.stompClient.send(
        '/socket-subscribers/send/message',
        {},
        JSON.stringify(message)
      );
    }
  }

  decline() {
    console.log(this.stompClient);
    this.modalRef.hide();
  }
  ngOnInit(): void {
    console.log('add card');
  }
}
