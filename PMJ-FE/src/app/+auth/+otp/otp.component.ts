import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

import { FormsModule, FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  providers: [AuthService],
  styles: []
})
export class OtpComponent implements OnInit {
  userRegisterModel = new UserOTPModel('', '');
  public errorMessage: string;
  public submitted: boolean;

  public complexForm: FormGroup;
  public otp: AbstractControl;
  public password: AbstractControl;
  public retypePassword: AbstractControl;
  loading = false;
  public forgotPasswordMessage: string;

  constructor(
    //private alertNotificationService: AlertNotificationService,
    private readonly route: ActivatedRoute, private readonly router: Router, private readonly authService: AuthService, private readonly fb: FormBuilder) {

    this.complexForm = fb.group({
      otp: [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]{6,6}$')])],
      password: [null, Validators.required],
      retypePassword: ['', Validators.required]
    }, { validator: this.MatchPassword })
    this.otp = this.complexForm.controls['otp'];
    this.password = this.complexForm.controls['password'];
    this.retypePassword = this.complexForm.controls['retypePassword'];
  }
  MatchPassword(control: FormControl): FormGroup {
    const password = control.get('password').value; // to get value in input tag
    const confirmPassword = control.get('retypePassword').value;
    // to get value in input tag
    if (confirmPassword != null) {
      if (password !== confirmPassword) {
        control.get('retypePassword').setErrors({ MatchPassword: true })
      } else {
        return null
      }
    }
  }


  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      if (params.data !== undefined) {
        if (params.data === 'Success') {
          this.forgotPasswordMessage = 'OTP has been sent to the registered Mobile Number/Email';
        }
      }
    })
  }

  register(event) {
    this.submitted = true;
    this.loading = true;
    this.authService.userOTP(event.otp, event.password).subscribe(
      (data: any) => {

        if (data.data != null) {
          this.errorMessage = '';
          sessionStorage.setItem('userRole', data.data.roles[0].name);
          sessionStorage.setItem('Authentication', btoa(`${data.data.email}:${event.password}`))
          //  this.router.navigate(['/login'])
          this.loading = false;
          this.router.navigate(['/auth/login'])

        } else {
          this.loading = false;
          this.errorMessage = data.error.message;
        }


      },
      error => {
        this.loading = false;
        this.errorMessage = 'Enter  OTP and Password';
      });




  }

  // notificationAlert(a) {
  //   this.alertNotificationService.smallBox({
  //     // title: 'James Simmons liked your comment',
  //     content: a,
  //     color: '#296191',
  //     // iconSmall: '',
  //     timeout: 4000
  //   });
  // }
}
export class UserOTPModel {
  constructor(

    public password: string,
    public otp: string
  ) { }
}
