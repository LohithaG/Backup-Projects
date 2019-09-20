import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormArray } from '@angular/forms';

import { endponitConfig } from '../../../environments/endpoints';
import { Global } from '../../shared/global';
declare var SockJS;
declare var Stomp;
declare let cordova: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  userLogin = new UserLoginModel('lginjupalli@metanoiasolutions.net', 'Test@123');
  public loginErrorMessgae;


  public complexForm: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public otpNotification: string;
  submitted: boolean;
  loading = false;
  stompClient;
  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService, private fb: FormBuilder, ) {
    this.complexForm = fb.group({
      email: [null, Validators.compose([Validators.required,
      Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])],
      password: [null, Validators.compose([Validators.required])]
    })
    this.email = this.complexForm.controls['email'];
    this.password = this.complexForm.controls['password'];
  }

  ngOnInit() {
  }

  userAuthentication(event) {
    this.submitted = true;
    this.loading = true;
    this.authService.userAuthentication(this.userLogin.username, this.userLogin.password).subscribe(
      response => {
        if (response.status === 200) {
          this.authService.getUserDetailsByEmail(this.userLogin.username).subscribe(data => {
            if (data.error === null) {
              localStorage.setItem('userName', data.data.name)
              localStorage.setItem('userRole', data.data.roles[0].name);
              localStorage.setItem('currentUser', data.data.email);
              localStorage.setItem('userData', data.data.id);
              if (data.data.roles[0].name == 'INVENTORY_MANAG') {
                this.router.navigate(['/inventory/inventory-manager']);
              } else if (data.data.roles[0].name == 'DISPATCHER') {
                this.router.navigate(['/dispatcher/dispatcher-module']);
              } else {
                this.loading = false;
                localStorage.setItem('Authentication', '')
                this.loginErrorMessgae = 'Please enter valid credentials';
                setTimeout(() => {
                  this.loginErrorMessgae = ''
                }, 5000);
              }
            } else {
              this.loginErrorMessgae = 'Please enter valid credentials';
            }
          }, error => {
            this.loading = false;
            localStorage.setItem('Authentication', '')
            this.loginErrorMessgae = 'Please enter valid credentials';
            setTimeout(() => {
              this.loginErrorMessgae = ''
            }, 5000);
          })
        } else {
          this.loading = false;
          this.loginErrorMessgae = 'Please enter valid credentials';
          setTimeout(() => {
            this.loginErrorMessgae = ''
          }, 5000);
        }
        this.loading = false;
      }, error => {
        this.loading = false;
        this.loginErrorMessgae = 'Please enter valid credential'
      });
  }
}


export class UserLoginModel {
  constructor(
    public username: string,
    public password: string
  ) { }
}
