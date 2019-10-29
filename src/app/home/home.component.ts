import { Component, OnInit } from '@angular/core';
import { Team } from '../shared/models/team.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  TeamList :Team[] =  [new Team(1,"Test Team", 
  "Team Description Test",
  "https://yt3.ggpht.com/a/AGF-l78H6gc_HwKrdac6T3vqJ2rrVFoE5atTxPwraA=s900-c-k-c0xffffffff-no-rj-mo"),
  new Team(2,"Test Team1", 
  "Team Description Test",
  "https://yt3.ggpht.com/a/AGF-l78H6gc_HwKrdac6T3vqJ2rrVFoE5atTxPwraA=s900-c-k-c0xffffffff-no-rj-mo"),
  new Team(3,"Test Team2", 
  "Team Description Test",
  "https://yt3.ggpht.com/a/AGF-l78H6gc_HwKrdac6T3vqJ2rrVFoE5atTxPwraA=s900-c-k-c0xffffffff-no-rj-mo"),
  new Team(4,"Test Team3", 
  "Team Description Test",
  "https://yt3.ggpht.com/a/AGF-l78H6gc_HwKrdac6T3vqJ2rrVFoE5atTxPwraA=s900-c-k-c0xffffffff-no-rj-mo")];
  
  EvenTeam: Team[];
  OddTeam: Team[];
  constructor() { }

  ngOnInit() {
    this.EvenTeam = this.TeamList.filter(( v, i) => i % 2==0);
    this.OddTeam = this.TeamList.filter(( v, i) => i % 2 != 0);
  }

}
