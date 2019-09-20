import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtpRoutingModule } from './otp-routing.module';
import { OtpComponent } from './otp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    OtpRoutingModule, FormsModule, ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' })
  ],
  declarations: [OtpComponent]
})
export class OtpModule { }
