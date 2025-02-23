import { Component } from '@angular/core';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: SocialUser | undefined;
  loggedIn: boolean = false;

  constructor(private authService: SocialAuthService) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn('GOOGLE');
  }

  signInWithFacebook(): void {
    this.authService.signIn('FACEBOOK');
  }

  signOut(): void {
    this.authService.signOut();
  }
}
