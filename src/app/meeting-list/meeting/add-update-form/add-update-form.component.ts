import { Component, TemplateRef, Input, ViewChild, ɵConsole } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { StandUp } from '../../../shared/models/standup.model';
import { StandupService } from 'src/app/services/standup.service';

@Component({
  selector: 'app-add-update-form',
  templateUrl: './add-update-form.component.html',
  styleUrls: ['./add-update-form.component.sass']
})
export class AddUpdateFormComponent {
  @Input()disabled: boolean;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private route: ActivatedRoute, private standUpService: StandupService) {}
  
  standup: StandUp = new StandUp();
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    
  }

  confirm(form: NgForm){

    console.log(form);
    this.route.queryParams.subscribe(params=> {
      console.log("params"+ params.meetingID);
      this.standup.blockers = form.controls.blockers.value;
      this.standup.yesterday = form.controls.yesterday.value;
      this.standup.today = form.controls.today.value;
      this.standup.meeting_id = params.meetingID;
      this.standup.member_id = params.memberID;
      console.log(this.standup);
      this.standUpService.AddUpdate(this.standup).subscribe(data=>{
        console.log(data);
        this.modalRef.hide();
      }); 
    });

  }
  decline(){
    this.modalRef.hide();
  }
}
