import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnChanges,OnInit {
  title = 'VirtualStandUp';
  isLoggedIn = false;

  constructor(private auth: AuthenticationService, private router: Router){
   
    
  }

  ngOnChanges(){
    
    console.log("here");
  }
  ngOnInit(){

    console.log("activated");
    this.auth.getValue().subscribe(value=>{
      this.isLoggedIn = value;
    });
  }
}
