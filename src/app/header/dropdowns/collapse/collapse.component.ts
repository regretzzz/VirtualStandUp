import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.sass']
})
export class CollapseComponent implements OnInit {
  isCollapsed = true;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  Logout() {

    this.authenticationService.Logout();
  }
}
