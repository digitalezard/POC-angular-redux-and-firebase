import { Action } from "@ngrx/store";

/** 
 * Auth ActionTypes identifier
 */
export const ActionTypes = { 
    SET_AUTHENTICATED:  '[Auth] Set Authenticated',
    SET_UNAUTHENTICATED:  '[Auth] Set Unauthenticated'
}

/*
 * Action for set isAuthenticated to true on the store
 */
export class SetAuthenticated implements Action {
    readonly type = ActionTypes.SET_AUTHENTICATED;
}

/*
 * Action for set isAuthenticated to false on the store
 */
export class SetUnauthenticated implements Action {
    readonly type = ActionTypes.SET_UNAUTHENTICATED;
}

/**
 * Export Actions
 */
export type AuthActions = 
SetAuthenticated   |
SetUnauthenticated ;