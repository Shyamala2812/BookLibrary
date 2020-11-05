import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  page = 'category';
  title = 'library';
  token;

  constructor(
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.router.events.subscribe(a => {
      if (a instanceof NavigationEnd) {
        this.token = localStorage.getItem('token');
    }

    });
  }


  logoutApplication(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
    
  }
}
