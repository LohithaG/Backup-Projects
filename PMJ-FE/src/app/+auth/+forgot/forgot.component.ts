import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormArray, FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  providers: [AuthService],
  styles: []
})
export class ForgotComponent implements OnInit {
  public errorMessage: string;
  userRegisterModel = new UserRegisterModel('', '');

  public complexForm: FormGroup;
  public email: AbstractControl;
  public phone: AbstractControl;
  submitted: boolean;
  loading = false;


  constructor(
    //  private alertNotificationService: AlertNotificationService,
    private readonly router: Router, private readonly fb: FormBuilder,
    private readonly authService: AuthService
  ) {
    this.complexForm = fb.group({
      email: [null, Validators.compose([Validators.required,
      Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])],
      // phone: [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]{10,10}$')], )]
  //    phone: []
    })

    this.email = this.complexForm.controls['email'];
    this.phone = this.complexForm.controls['phone'];


  }

  ngOnInit() {
  }

  submit(event) {
    this.submitted = true;
    this.loading = true;
    this.authService.userForgotPassword(event.email, event.phone).subscribe(
      (data: any) => {
        if (data.data != null) {
          this.errorMessage = '';
          sessionStorage.setItem('userData', data.data.id)
          this.loading = false;
          this.router.navigate(['/auth/otp', { data: 'Success' }])
        } else {
          this.loading = false;
          this.errorMessage = data.error.message;
        }
      },
      error => {
        this.loading = false;
      });
  }




}

export class UserRegisterModel {
  constructor(

    public email: string,
    public phone: string
  ) { }
}
