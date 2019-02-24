import { IExercise } from "./exercise.model";
import { take } from 'rxjs/operators';
import { AngularFirestore } from "@angular/fire/firestore";
import { Subscription } from 'rxjs';
import { Injectable } from "@angular/core";
import { UIService } from "../shared/ui.service";
import { Store } from '@ngrx/store';
import * as UI from '../shared/ui.action';
import * as TrainingSelectors from './training.reducer';
import * as Training from './training.actions';
import * as fromTraining from './training.state';

/**
 * Service for handle Training
 */
@Injectable()
export class TrainingService {
    private firebaseSubscription: Subscription[] = [];

    constructor(private db: AngularFirestore, private uiService: UIService, private store: Store<fromTraining.State>){}

    /**
     * Method for fetch available exercises from the database and store them on app Store
     */
    public fetchAvailableExercises(){
        this.store.dispatch(new UI.StartLoading());
        this.firebaseSubscription.push(this.db
            .collection('availableExercises')
            .snapshotChanges()
            .map((docArray) => {
                return docArray.map((value) => {
                    return {
                        id: value.payload.doc.id,
                        name: value.payload.doc.get('name'),
                        duration: value.payload.doc.get('duration'),
                        calories: value.payload.doc.get('calories')
                    };
                });
            })
            .subscribe((exercises: IExercise[]) => {
                this.store.dispatch(new UI.StopLoading());
                this.store.dispatch(new Training.SetAvailableTrainings(exercises));
            }, (error) => {
                this.store.dispatch(new UI.StopLoading());
                this.uiService.showSnackbar('Fetching Exercices failed, please retry later', null, 3000);
            }));
    }

    /**
     * Method for start new exercise
     */
    public startExercise(selectedId: string) {
        this.store.dispatch(new Training.StartTraining(selectedId))
    }

    /**
     * Method to add completed Exercise to the database
     */
    public completeExercise(){
        this.store.select(TrainingSelectors.getActiveTraining).pipe(take(1)).subscribe((ex) => {
            this.addDataToDatabase({
                ...ex, 
                date: new Date(), 
                state: 'completed'
            });
        });
        this.store.dispatch(new Training.StopTraining(null));
    }

    /**
     * Method to add canceled Exercise to the database
     */
    public cancelExercise(progress: number){
        this.store.select(TrainingSelectors.getActiveTraining).pipe(take(1)).subscribe((ex) => {
            this.addDataToDatabase({
                ...ex, 
                duration: ex.duration * (progress / 100),
                calories: ex.calories * (progress / 100),
                date: new Date(), 
                state: 'cancelled'
            });
        });
        this.store.dispatch(new Training.StopTraining(null));
    }

    /**
     * Method for fetch finished exercises from the database and store them on app Store
     */
    public fetchCompletedOrCancelledExercises(){
        this.firebaseSubscription.push(this.db.collection('finishedExercises').valueChanges().subscribe((exercises: IExercise[]) => {
            this.store.dispatch(new Training.SetFinishedTrainings(exercises));
        }));
    }

    /**
     * Method for add finished exercises on the database
     */
    private addDataToDatabase(exercise: IExercise){
        this.db.collection('finishedExercises').add(exercise);
    }

    /**
     * Method to cancel Firebase Subscriptions
     */
    public cancelSubscriptions(){
        this.firebaseSubscription.forEach((subscription) => subscription.unsubscribe());
    }
}