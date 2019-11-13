import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MeetingService } from 'src/app/services/meeting.service';
import { map, switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.sass']
})
export class MeetingComponent implements OnInit {
  StandUpList: Object;
  ShowCards = false;
  IsDone = false;
  constructor(private route: ActivatedRoute, private meetingService: MeetingService) { 
    console.log(route.queryParams.value.memberID);

    console.log(Date.now());


    

  }

  ngOnInit() {
    this.meetingService.GetMeetings(this.route.queryParams.value.meetingID).subscribe(response => {
      console.log(response);
      this.StandUpList = response;
      if(this.StandUpList.cards.length> 0 ){
        this.ShowCards = true;
        this.meetingService.IsDone(this.route.queryParams.value.meetingID,this.route.queryParams.value.memberID)
        .subscribe(data =>{
          console.log(data);
          this.IsDone = <boolean>data;
        });
      }
    });
  }

  AddUpdate(event: any){
    
  }
}
