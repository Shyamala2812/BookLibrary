import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    });
   }

  ngOnInit(): void {
  }

  async handleSubmit(): Promise<void> {
    try {
      const data = {
        name: this.loginForm.get('username').value,
        password: this.loginForm.get('password').value,
      };
      const token = await this.loginService.checkLogin(data);
      console.log(token);
      if (token?.token) {
        localStorage.setItem('token', token.token);
        this.router.navigate(['/category']);
      } else {
        console.log('failed to login');
      }
    } catch (error) {
      console.log('soomething went wrong in Login');
    }
  }
}
