import { ActionTypes, UIActions } from './ui.action';
import { IUIState, initialState } from './ui.state';

/**
 * @param state 
 * @param actions
 * UIReducer for handle UIState on the store 
 */
export function uiReducer(state: IUIState = initialState, action: UIActions){
    switch(action.type) { 
        case ActionTypes.START_LOADING: 
            return {
                isLoading: true
            };

        case ActionTypes.STOP_LOADING:
            return {
                isLoading: false
            };
        default: {
            return state;
        }
    }
};

/**
 * Return the value of the Loading State 
 */
export const getIsLoading = (state: IUIState) => state.isLoading;