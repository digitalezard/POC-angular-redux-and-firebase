import { NgModule } from "@angular/core";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SharedModule } from "../shared/shared.module";
import { AuthRoutingModule } from "./auth-routing.module";

/**
 * AuthModule
 */
@NgModule({
    declarations: [ 
        LoginComponent, 
        RegisterComponent
    ], 
    imports: [
        SharedModule,
        AngularFireAuthModule,
        AuthRoutingModule
    ]
})
export class AuthModule {

}