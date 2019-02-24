import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TrainingComponent } from "./training.component";

export const routes: Routes = 
[
    {path:'', component: TrainingComponent}
];

/**
 * Module for Training Routing
 */
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
   
})
export class TrainingRoutingModule {}