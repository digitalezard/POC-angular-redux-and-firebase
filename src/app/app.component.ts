import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  
  constructor(private authService: AuthService){}

  /**
   * Initialize Authentication listener on component initialization
   */
  ngOnInit(): void {
    this.authService.initAuthListener();
  }

  /**
   * Event - on sideNav Toggle
   */
  onToggle(){
    this.sidenav.toggle();
  }
}
