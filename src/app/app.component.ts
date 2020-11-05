import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  page = 'category';
  title = 'library';

  constructor(private router: Router) {
  }


  logoutApplication(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);

  }
}
