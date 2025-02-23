import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from '@abacritt/angularx-social-login';

@NgModule({
  imports: [
    CommonModule,
    SocialLoginModule
  ],
  exports: [SocialLoginModule]
})
export class AuthModule {
  static forRoot() {
    return {
      ngModule: AuthModule,
      providers: [
        {
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: false,
            providers: [
              {
                id: 'GOOGLE',
                provider: new GoogleLoginProvider(
                  'YOUR_GOOGLE_CLIENT_ID'
                ),
              },
              {
                id: 'FACEBOOK',
                provider: new FacebookLoginProvider(
                  'YOUR_FACEBOOK_APP_ID'
                ),
              },
            ],
          } as SocialAuthServiceConfig,
        },
      ],
    };
  }
}
