import { Subject } from "rxjs";
import { MatSnackBar } from "@angular/material";
import { Injectable } from "@angular/core";

/**
 * Service for handle UI
 */
@Injectable()
export class UIService {
    /** 
     * loading State
     */
    loadingStateChanged = new Subject<boolean>();

    constructor(private snackbar: MatSnackBar){}

    /**
     * Method for display Snckbar
     */
    public showSnackbar(message, action, duration) {
        let config = {duration: duration}
        this.snackbar.open(message, action, config);
    }
}