import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { IExercise } from '../exercise.model';
import { Store } from '@ngrx/store';

import * as fromTraining from '../training.state';
import * as TrainingSelectors from '../training.reducer';


@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.scss']
})
export class PastTrainingComponent implements OnInit, AfterViewInit{
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    
    public displayedColumns: string[] = ['name', 'duration', 'calories', 'date', 'state'];
    public dataSource = new MatTableDataSource<IExercise>();

    constructor(
        private trainingService: TrainingService, 
        private store: Store<fromTraining.State>     
    ) { }

    ngOnInit() {
        this.store.select(TrainingSelectors.getFinishedExercises).subscribe((exercises: IExercise[]) => {
            this.dataSource.data = exercises;
        })
       this.trainingService.fetchCompletedOrCancelledExercises();
    }

    ngAfterViewInit(){
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    /**
     * @param filterValue
     * Event - triggered on keyup, for handle TabFilter 
     */
    public doFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
