import { NgModule } from "@angular/core";
import { StoreModule } from '@ngrx/store';

import { NewTrainingComponent } from "./new-training/new-training.component";
import { PastTrainingComponent } from "./past-training/past-training.component";
import { TrainingComponent } from "./training.component";
import { CurrentTrainingComponent } from "./current-training/current-training.component";
import { SharedModule } from "../shared/shared.module";
import { TrainingRoutingModule } from "./training-routing.module";
import { trainingReducer } from "./training.reducer";

@NgModule({
    declarations: [ 
        NewTrainingComponent, 
        PastTrainingComponent, 
        TrainingComponent, 
        CurrentTrainingComponent
    ], 
    imports: [
        SharedModule,
        TrainingRoutingModule,
        StoreModule.forFeature('training', trainingReducer)
    ],
    exports: []
})
export class TrainingModule {}