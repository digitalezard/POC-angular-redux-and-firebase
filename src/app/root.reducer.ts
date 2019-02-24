import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromUi from './shared/ui.reducer';
import * as fromAuth from './auth/auth.reducer';
import { AuthState } from './auth/auth.state';
import { IUIState } from './shared/ui.state';

export interface State {
    ui: IUIState;
    auth: AuthState;
}

export const rootReducer: ActionReducerMap<State> = {
    ui: fromUi.uiReducer,
    auth: fromAuth.authReducer
};

export const getUiState = createFeatureSelector<IUIState>('ui');
export const getAuthState = createFeatureSelector<AuthState>('auth');

export const getIsLoading = createSelector(getUiState, fromUi.getIsLoading);
export const getIsAuthenticated = createSelector(getAuthState, fromAuth.getIsAuthenticated);