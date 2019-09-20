import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http'
import { QRCodeScanner } from './+qrcode-scanner/qrcode-scanner.service';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MatDialogModule, MatIconModule, MatButtonModule } from '@angular/material';
import {SharedModule} from './shared.module'
import { ModalModule } from 'ngx-bootstrap';



@NgModule({
  imports: [
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ComponentsModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ModalModule.forRoot(),

  ],
  declarations: [
    AppComponent,
    
    AdminLayoutComponent
  ],
  providers: [AppService, AuthService, QRCodeScanner],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule { }
