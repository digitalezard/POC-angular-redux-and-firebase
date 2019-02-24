import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route} from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../root.reducer';
import { take } from 'rxjs/operators';

/**
 * AuthGuard for handle permission for the routing
 */
@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    constructor( private store: Store<fromRoot.State>){}

    /**
     * @param router 
     * @param state
     * canActivate handle the protected routes according to the authentication state
     */
    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.store.select(fromRoot.getIsAuthenticated).pipe(take(1));
    }
    
    /**
     * @param route 
     * canLoad handle the loading of protected components, according to the authentication state, for LazyLoading
     */
    canLoad(route: Route){
        return this.store.select(fromRoot.getIsAuthenticated).pipe(take(1));
    }
}