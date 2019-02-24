import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../root.reducer';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Output() sidenavToggle:EventEmitter<void>;
    public isAuth$: Observable<boolean>;

    constructor( private store: Store<fromRoot.State>, private authService: AuthService) { 
        this.sidenavToggle = new EventEmitter<void>() ;
    }

    ngOnInit() {
        this.isAuth$ = this.store.select(fromRoot.getIsAuthenticated);
    }

    /**
     * Event - On NavBar Toggle
     */
    public onToggle(){
        this.sidenavToggle.emit();
    }

    /**
     * Event - On Logout
     */
    public onLogout() {
        this.authService.logout();
    }
}