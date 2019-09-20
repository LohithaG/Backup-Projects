import { ModuleWithProviders, NgModule } from '@angular/core';
import { UserIdleConfig } from './angular-user-idle.config';
import { UserIdleService } from './angular-user-idle.service';

@NgModule({
  imports: []
})
export class UserIdleModule {
  static forRoot(config: UserIdleConfig): ModuleWithProviders {
    return {
      ngModule: UserIdleModule,
      providers: [UserIdleService,
        {provide: UserIdleConfig, useValue: config}
      ]
    };
  }
}
