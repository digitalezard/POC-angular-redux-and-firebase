import { TrainingActions, ActionTypes } from "./training.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TrainingState, initialState } from './training.state';

/**
 * @param state 
 * @param action 
 * training reducer for handle trainings state on the store
 */
export function trainingReducer(state: TrainingState = initialState , action: TrainingActions){
    switch(action.type){
        case ActionTypes.SET_AVAILABLE_TRAININGS:
            return {
                ...state,
                availableExercises: action.payload
            };

        case ActionTypes.SET_FINISHED_TRAININGS: 
            return {
                ...state,
                finishedExercises: action.payload
            };

        case ActionTypes.START_TRAINING:
            return {
                ...state,
                activeTraining: {...state.availableExercises.find(ex => ex.id == action.payload)}
            };
        case ActionTypes.STOP_TRAINING:
            return {
                ...state,
                activeTraining: null
            };
        default: {
            return state;
        }
    }
}

/**
 * Multiple selectors for return the differents value of the training state
 */
export const getTrainingState = createFeatureSelector<TrainingState>('training');
export const getAvailableExercises = createSelector(getTrainingState, (state: TrainingState) => state.availableExercises);
export const getFinishedExercises = createSelector(getTrainingState, (state: TrainingState) => state.finishedExercises);
export const getActiveTraining = createSelector(getTrainingState, (state: TrainingState) => state.activeTraining);
export const getIsTraining = createSelector(getTrainingState, (state: TrainingState) => state.activeTraining !== null);