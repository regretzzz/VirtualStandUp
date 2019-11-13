import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  @ViewChild('f',{static: false}) loginForm: NgForm;

  constructor(private http: HttpClient, private auth: AuthenticationService, private router: Router) { }

  
  ngOnInit() {
    if(localStorage.length  > 0 ){
        this.router.navigate(['']);
    }
    let forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    let validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }

  SubmitLogin() {
    console.log(this.loginForm);
    let user = this.auth.Login(this.loginForm.controls.username.value, 
      this.loginForm.controls.password.value);
    // let loginData = {};
    // loginData['username'] = this.loginForm.controls.username.value;
    // loginData['password'] = this.loginForm.controls.password.value;
    // console.log(loginData);
    // this.http.post('http://localhost:8080/user/login/',loginData).subscribe(
    //   responseData=> {
    //     console.log(responseData);
    //   });
  }

}
