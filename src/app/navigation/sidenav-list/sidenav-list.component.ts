import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../root.reducer';

@Component({
    selector: 'app-sidenav-list',
    templateUrl: './sidenav-list.component.html',
    styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
    @Output() sidenavClose:EventEmitter<void>;
    public isAuth$: Observable<boolean>;

    constructor(private store: Store<fromRoot.State>, private authService: AuthService) { 
        this.sidenavClose = new EventEmitter<void>() ;
    }

    ngOnInit() {
        this.isAuth$ = this.store.select(fromRoot.getIsAuthenticated);
    }

    /**
     * Event - On Close SideNav
     */
    onClose(){
        this.sidenavClose.emit();
    }

    /**
     * Event - On Logout
     */
    onLogout() {
        this.authService.logout();
        this.onClose();
    }
}
