import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AuthService, AccountType } from '../services/account/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  constructor(private dialogRef: MatDialogRef<LoginComponent>,
    private authService: AuthService) {

  }

  linkedInLogin() {
    AuthService.getProvider(AccountType.linkedIn, this.authService).signIn();
  }
}
