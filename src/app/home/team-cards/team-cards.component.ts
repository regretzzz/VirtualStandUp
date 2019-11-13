import { Component, OnInit, Input } from '@angular/core';
import { Team } from 'src/app/shared/models/team.model';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-cards',
  templateUrl: './team-cards.component.html',
  styleUrls: ['./team-cards.component.sass']
})
export class TeamCardsComponent implements OnInit {
  @Input() teamCard: Team;

  constructor(private router: Router, private route: ActivatedRoute, private teamService: TeamService) {

  }

  ngOnInit() {
    console.log(this.teamCard);
  }

  checkTeam(event: MouseEvent) {
    console.log(this.teamCard.teamId);
    this.teamService.ViewTeam(this.teamCard.teamId, localStorage.getItem('userID'));

  }

}
