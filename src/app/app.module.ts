import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './routes';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { StopTrainingComponent } from './training/current-training/stop-training.component';

import { AuthService } from './auth/auth.service';
import { TrainingService } from './training/training.service';
import { UIService } from './shared/ui.service';

import { rootReducer } from './root.reducer';

@NgModule({
    declarations: [
        AppComponent, 
        WelcomeComponent, 
        HeaderComponent, 
        SidenavListComponent,
        StopTrainingComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        FlexLayoutModule,
        MaterialModule,
        AuthModule,
        StoreModule.forRoot(rootReducer)
    ],
    providers: [AuthService, TrainingService, UIService],
    bootstrap: [AppComponent],
    entryComponents: [StopTrainingComponent]
})
export class AppModule {}
