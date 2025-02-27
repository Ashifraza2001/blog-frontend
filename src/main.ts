// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { SocialLoginModule } from '@abacritt/angularx-social-login'; // or @abacritt/angularx-social-login
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app/app.routes';
import { RouterModule } from '@angular/router';
import { importProvidersFrom } from '@angular/core';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(routes),
      SocialLoginModule,
      HttpClientModule
    )
  ]
}).catch(err => console.error(err));



