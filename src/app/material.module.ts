import { NgModule } from "@angular/core";
import {
    MatInputModule, 
    MatButtonModule, 
    MatDatepickerModule, 
    MatToolbarModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatFormFieldModule, 
    MatCheckboxModule,
    MAT_DATE_LOCALE,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSnackBarModule
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
    declarations: [],
    imports: [
        MatInputModule, 
        MatButtonModule, 
        MatDatepickerModule, 
        MatToolbarModule, 
        MatSidenavModule,
        MatIconModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatMomentDateModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatSnackBarModule,
        MatProgressSpinnerModule

    ],
    exports: [
        MatInputModule, 
        MatButtonModule, 
        MatDatepickerModule, 
        MatToolbarModule, 
        MatSidenavModule,
        MatIconModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatMomentDateModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatSnackBarModule,
        MatProgressSpinnerModule
    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'fr' }
    ],
  })
  export class MaterialModule {}