import { Component, OnInit} from '@angular/core';
import { TrainingService } from '../training.service';
import { IExercise } from '../exercise.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';

import * as fromTraining from '../training.state';
import * as TrainingSelectors from '../training.reducer';
import * as fromRoot from '../../root.reducer';

@Component({
    selector: 'app-new-training',
    templateUrl: './new-training.component.html',
    styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
    public exercises$: Observable<IExercise[]>;
    public isLoading$: Observable<boolean>;
    public trainingForm: FormGroup;
    
    constructor(
        private trainingService: TrainingService, 
        private store: Store<fromTraining.State>
    ) { }

    ngOnInit() {
        this.isLoading$ = this.store.select(fromRoot.getIsLoading);
        this.exercises$ = this.store.select(TrainingSelectors.getAvailableExercises);
        this.fetchExercises();
        this.initForm();
    }

    /**
     * @param form
     * Event - On Start Training 
     */
    public onStartTraining(form: FormGroup){
        this.trainingService.startExercise(form.value.exercise);
    }

    /**
     * Method for fetch Available exercises
     */
    public fetchExercises() {
        this.trainingService.fetchAvailableExercises();
    }

    /**
     * Method for initialize Form
     */
    public initForm(){
        this.trainingForm = new FormGroup({
            exercise: new FormControl(null, Validators.required)
        });
    }
}
