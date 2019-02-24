/**
 * Interface for Authentication State
 */
export interface AuthState {
    isAuthenticated: boolean;
}

/**
 * Initial state for the authentication reducer
 */
export const initialState: AuthState = {
    isAuthenticated: false
};