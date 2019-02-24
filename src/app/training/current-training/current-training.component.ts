import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stop-training.component';
import { TrainingService } from '../training.service';
import * as fromTraining from '../training.state';
import * as TrainingSelectors from '../training.reducer';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-current-training',
    templateUrl: './current-training.component.html',
    styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {
    public progress = 0;
    public timer: any;

    constructor(private dialog: MatDialog, private trainingService: TrainingService, private store: Store<fromTraining.State>) {}

    ngOnInit() {
        this.startOrResumeTimer();
    }

    /**
     * Method for start or resume Training Timer
     */
    public startOrResumeTimer(){
        this.store.select(TrainingSelectors.getActiveTraining).pipe(take(1)).subscribe((ex) => {
            const step = ex.duration / 100 * 1000;
            this.timer = setInterval(() => {
                this.progress = this.progress + 1;
                if (this.progress >= 100) {
                    this.trainingService.completeExercise();
                    clearInterval(this.timer);
                }
            }, step);
        });
    }

    /**
     * Event - On Stop current training
     */
    public onStop(){
        clearInterval(this.timer);
        const dialogRef = this.dialog.open(StopTrainingComponent, {data: {
            progress: this.progress
        }});

        dialogRef.afterClosed().subscribe(result => {
            result ? 
            this.trainingService.cancelExercise(this.progress) : 
            this.startOrResumeTimer();
        });
    }

}
