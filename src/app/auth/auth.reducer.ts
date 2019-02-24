import { AuthActions, ActionTypes } from "./auth.actions";
import { AuthState, initialState } from './auth.state';

/**
 * @param state 
 * @param actions
 * authReducer for handle authState on the store 
 */
export function authReducer(state: AuthState = initialState , actions: AuthActions){
    switch(actions.type){
        case ActionTypes.SET_AUTHENTICATED:
            return {
                isAuthenticated: true
            };

        case ActionTypes.SET_UNAUTHENTICATED: 
            return {
                isAuthenticated: false
            };

        default: {
            return state;
        }
    }
}

/**
 * Return the value of the authenticationState 
 */
export const getIsAuthenticated = (state: AuthState) => state.isAuthenticated;