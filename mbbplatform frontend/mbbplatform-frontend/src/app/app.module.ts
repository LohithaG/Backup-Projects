import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'
import { routing } from './app.routing'

import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';


import { CoreModule } from "./core/core.module";
import { SmartadminLayoutModule } from "./shared/layout/layout.module";

import { AppInterceptor } from './app.interceptor';


import { AuthGuard } from './+auth/guards/index';
import { UserRoleGuard } from './+auth/guards/userRole.guard';
import { UserIdleModule } from './angular-user-idle.module';
import { UserIdleService } from './angular-user-idle.service';

const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ModalModule.forRoot(),
    CoreModule,
    SmartadminLayoutModule,
    routing,
    HttpClientModule,
    UserIdleModule.forRoot({idle: 1800, timeout: 60, ping: 0}),
  ],
  exports: [
  ],
  providers: [
    APP_PROVIDERS,
    AuthGuard,
    UserRoleGuard,
  { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
  UserIdleService
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) { }
}
