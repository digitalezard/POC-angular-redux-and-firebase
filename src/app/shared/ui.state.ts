/**
 * Interface for UI State
 */
export interface IUIState {
    isLoading: boolean
}

/**
 * Initial state for the ui reducer
 */
export const initialState: IUIState = {
    isLoading: false
};