import { Action } from "@ngrx/store";

/** 
 * UI ActionTypes identifier
 */
export const ActionTypes = {
    START_LOADING:  '[UI] Start Loading',
    STOP_LOADING:   '[UI] Stop Loading' 
};

/*
 * Action for set isLoading to true on the store
 */
export class StartLoading implements Action {
    readonly type = ActionTypes.START_LOADING;
}

/*
 * Action for set isLoading to false on the store
 */
export class StopLoading implements Action {
    readonly type = ActionTypes.STOP_LOADING;
}

/**
 * Export Actions 
 */
export type UIActions = 
StartLoading |
StopLoading  ;