import { Action } from "@ngrx/store";
import { IExercise } from "./exercise.model";

/** 
 * Training ActionTypes identifier
 */
export const ActionTypes = { 
    SET_AVAILABLE_TRAININGS:    '[Training] Set Available trainings',
    SET_FINISHED_TRAININGS:     '[Training] Set Finished trainings',
    START_TRAINING:             '[Training] Start training',
    STOP_TRAINING:              '[Training] Stop training'
}

/*
 * Action for set available exercises on the store
 */
export class SetAvailableTrainings implements Action {
    readonly type = ActionTypes.SET_AVAILABLE_TRAININGS;
    constructor(public payload: IExercise[]){}
}

/*
 * Action for set finished exercises on the store
 */
export class SetFinishedTrainings implements Action {
    readonly type = ActionTypes.SET_FINISHED_TRAININGS;
    constructor(public payload: IExercise[]){}
}

/*
 * Action for set activeTraining on the store
 */
export class StartTraining implements Action {
    readonly type = ActionTypes.START_TRAINING;
    constructor(public payload: string){}
}

/*
 * Action for clear activeTraining on the store
 */
export class StopTraining implements Action {
    readonly type = ActionTypes.STOP_TRAINING;
    constructor(public payload: any){}
}

/**
 * Export Actions 
 */
export type TrainingActions = 
    SetAvailableTrainings   |
    SetFinishedTrainings    |
    StartTraining           |
    StopTraining            ;