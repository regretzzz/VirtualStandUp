import { Component, OnInit, Input } from '@angular/core';
import { Team } from 'src/app/shared/models/team.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-cards',
  templateUrl: './team-cards.component.html',
  styleUrls: ['./team-cards.component.sass']
})
export class TeamCardsComponent implements OnInit {
  @Input()TeamCard: Team;

  constructor() { }
  
  ngOnInit() {
  }

  checkTeam(event: MouseEvent){
    alert(this.TeamCard);
  }

}
