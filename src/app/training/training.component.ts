import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as training from './training.state';
import * as fromTraining from './training.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'local-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

    public ongoingTraining$: Observable<boolean>;

    constructor(private store: Store<training.State>) { }

    ngOnInit() {
        this.ongoingTraining$ = this.store.select(fromTraining.getIsTraining);
    }
}