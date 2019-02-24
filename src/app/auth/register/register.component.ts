import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import * as fromRoot from '../../root.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'local-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    
    public registerForm: FormGroup = new FormGroup({});
    public maxDate;
    public isLoading$: Observable<boolean>;
    
    constructor(
        private authService: AuthService,
        private store: Store<fromRoot.State>
    ) { }
 
    ngOnInit() {
        this.isLoading$ = this.store.select(fromRoot.getIsLoading);
        this.initForm();
        this.maxDate = new Date();
        this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    }
 
    /**
     * Method for initialize Form
     */
    private initForm() {
        this.registerForm.addControl('email', new FormControl(null, [Validators.required, Validators.email]));
        this.registerForm.addControl('password', new FormControl('', [Validators.required, Validators.minLength(6)]));
        this.registerForm.addControl('birthdate', new FormControl(null, [Validators.required]));
        this.registerForm.addControl('accept', new FormControl(false, Validators.requiredTrue));
    }
 
    /**
     * @param currentForm
     * Event - On submit Form 
     */
    public onSubmit(currentForm: FormGroup){
        this.authService.registerUser({
            email: (!!currentForm.get('email').value) ? currentForm.get('email').value : null,
            password: (!!currentForm.get('password').value) ? currentForm.get('password').value : null
        });
    }
}
