import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../shared/models/team.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit{
  TeamList :Team[] ;
  
  constructor() { 
    
   
  }

  ngOnInit() {
    this.TeamList = JSON.parse(localStorage.getItem('teams'));
    console.log(this.TeamList[0]);
  }

}
