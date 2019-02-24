import { IAuthData } from "./auth-data.model";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { TrainingService } from "../training/training.service";
import { UIService } from "../shared/ui.service";
import { Store } from "@ngrx/store";
import * as fromRoot from '../root.reducer';
import * as UI from '../shared/ui.action';
import * as Auth from './auth.actions';

/**
 * Service for Authentication
 */
@Injectable()
export class AuthService {
    
    constructor(
        private router: Router, 
        private angularFireAuth: AngularFireAuth, 
        private trainingService: TrainingService,
        private uiService: UIService,
        private store: Store<fromRoot.State>
    ){}
 
    /**
     * Method for initialize authentication listener. 
     */
    public initAuthListener() {
        this.angularFireAuth.authState.subscribe(user => {
            if(user){
                this.store.dispatch(new Auth.SetAuthenticated());
                this.router.navigate(['/training']);
            }else {
                this.trainingService.cancelSubscriptions();
                this.store.dispatch(new Auth.SetUnauthenticated());
                this.router.navigate(['/login']);
            }
        });
    }

    /**
     * @param authData
     * Register Method 
     */
    public registerUser(authData: IAuthData) {
        this.store.dispatch(new UI.StartLoading());
        
        this.angularFireAuth.auth.createUserWithEmailAndPassword(
            authData.email, authData.password
        ).then((result) => {
            this.store.dispatch(new UI.StopLoading());
        })
        .catch((error) => {
            this.store.dispatch(new UI.StopLoading());
            this.uiService.showSnackbar(error.message, null, 3000);
        });
    }

    /**
     * @param authData
     * login Method 
     */
    public login(authData: IAuthData){
        this.store.dispatch(new UI.StartLoading());
        this.angularFireAuth.auth.signInWithEmailAndPassword(
           authData.email, 
           authData.password
        ).then((result) => {
           this.store.dispatch(new UI.StopLoading());
        })
        .catch((error) => {
           this.store.dispatch(new UI.StopLoading());
            this.uiService.showSnackbar(error.message, null, 3000);
        });
    }

    /**
     * Logout Method
     */
    public logout() {
        this.angularFireAuth.auth.signOut();
    }
}