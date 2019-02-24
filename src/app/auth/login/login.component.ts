import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AuthService } from '../auth.service';
import * as fromRoot from '../../root.reducer';

@Component({
  selector: 'local-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup = new FormGroup({});
    public isLoading$: Observable<boolean>;
    
    constructor(
        private authService: AuthService, 
        private store: Store<fromRoot.State>
    ) { }

    ngOnInit() {
        this.isLoading$ = this.store.select(fromRoot.getIsLoading);
        this.initForm();
    }

    /**
     * Method for initialize Form
     */
    private initForm() {
        this.loginForm.addControl('email', new FormControl(null, [Validators.required, Validators.email]));
        this.loginForm.addControl('password', new FormControl('', [Validators.required, Validators.minLength(6)]));
        this.loginForm.addControl('remember', new FormControl(false));
    }

    /**
     * @param currentForm
     * Event - On submit Form 
     */
    public onSubmit(currentForm: FormGroup){
        this.authService.login({
            email: (!!currentForm.get('email').value) ? currentForm.get('email').value : null,
            password: (!!currentForm.get('password').value) ? currentForm.get('password').value : null
        });
    }
}
