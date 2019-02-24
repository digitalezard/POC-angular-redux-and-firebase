import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { TrainingComponent } from "./training/training.component";
import { AuthGuard } from "./auth/auth.guard";

export const appRoutes: Routes = 
[
    {path: '', component: WelcomeComponent},
    //Lazy Loading
    {path: 'training', loadChildren: './training/training.module#TrainingModule', canLoad: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { initialNavigation: 'enabled' })],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {}
