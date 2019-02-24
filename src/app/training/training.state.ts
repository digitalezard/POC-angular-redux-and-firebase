import { IExercise } from './exercise.model';
import * as fromRoot from "../root.reducer";

/**
 * training State for handle trainings datas
 */
export interface TrainingState {
    availableExercises: IExercise[];
    finishedExercises: IExercise[];
    activeTraining: IExercise;
}

/**
 * State who extends RootState and add trainingState
 * allows access to the root State despite the lazy loading
 */
export interface State extends fromRoot.State {
    training: TrainingState;
}

/**
 * Initial state for training reducer
 */
export const initialState: TrainingState = {
    availableExercises: [],
    finishedExercises: [],
    activeTraining: null
};